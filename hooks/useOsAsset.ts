import { useState, useEffect } from 'react';

// Defines the shape of the returned asset information.
interface AssetInfo {
  osName: string;
  architecture?: string;
  downloadUrl?: string;
  version?: string; // We'll add a version property
  isLoading: boolean;
}

// A custom hook to detect the user's OS and provide a corresponding download asset.
const useOsAsset = (repository: string): AssetInfo => {
  const [asset, setAsset] = useState<AssetInfo>({
    osName: '',
    isLoading: true, // Initial state is loading
  });

  useEffect(() => {
    // Only run on the client side, where the window object is available.
    if (typeof window === 'undefined') return;

    const fetchLatestVersion = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`);
        if (!response.ok) {
          throw new Error('Failed to fetch latest release from GitHub.');
        }
        const data = await response.json();
        const latestVersion = data.tag_name;

        const ua = window.navigator.userAgent;
        const platform = window.navigator.platform;
        let osName = 'Unknown';
        let architecture = 'x64'; // Default to x64

        // 1. Detect OS and architecture
        if (ua.includes('Win')) {
          osName = 'Windows';
          architecture = 'x64'; 
        } else if (ua.includes('Mac')) {
          osName = 'macOS';
          if (platform.includes('arm64') || ua.includes('arm64')) {
            architecture = 'arm64';
          }
        } else if (ua.includes('Linux')) {
          osName = 'Linux';
          if (ua.includes('arm64') || ua.includes('aarch64')) {
            architecture = 'arm64';
          }
        }

        // 2. Map detected OS and architecture to the correct asset filename.
        const assetFileName = getAssetName(osName, architecture, latestVersion);

        // 3. Construct the dynamic download URL.
        const downloadUrl = assetFileName
          ? `https://github.com/${repository}/releases/download/${latestVersion}/${assetFileName}`
          : undefined;

        // 4. Update the state with the final asset information.
        setAsset({ osName, architecture, downloadUrl, version: latestVersion, isLoading: false });

      } catch (error) {
        console.error('Error fetching release assets:', error);
        setAsset({ osName: 'Unknown', isLoading: false });
      }
    };

    fetchLatestVersion();

  }, [repository]);

  return asset;
};

// Helper function to map OS and architecture to the correct asset filename.
const getAssetName = (osName: string, architecture: string, version: string): string => {
  const arch = architecture.toLowerCase();
  const baseName = `Swarm.Desktop-${version.replace(/^v/, '')}`; // Removes leading 'v' if present

  switch (osName) {
    case 'Windows':
      return `${baseName}.Setup.exe`;
    case 'macOS':
      if (arch === 'arm64') {
        return `${baseName}-arm64.dmg`;
      }
      return `${baseName}-x64.dmg`;
    case 'Linux':
      if (arch === 'arm64') {
        return `swarm-desktop_${version.replace(/^v/, '')}_arm64.deb`;
      }
      return `swarm-desktop_${version.replace(/^v/, '')}_amd64.deb`;
    default:
      return '';
  }
};

export { useOsAsset, getAssetName };
export default useOsAsset;
