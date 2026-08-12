import { useState, useEffect } from 'react';

// Defines the shape of the returned asset information.
interface AssetInfo {
  osName: string;
  architecture?: string;
  downloadUrl?: string;
  // Secondary download for platforms where one build can't serve everyone,
  // e.g. on macOS the main download is arm64 and this holds the x64 build.
  alternativeDownloadUrl?: string;
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
        let osName = 'Unknown';
        let architecture = 'x64'; // Default to x64

        // 1. Detect OS and architecture
        if (ua.includes('Win')) {
          osName = 'Windows';
          architecture = 'x64';
        } else if (ua.includes('Mac')) {
          osName = 'macOS';
          // Browsers report 'MacIntel' even on Apple Silicon, so the CPU
          // cannot be detected reliably. The main download is always arm64;
          // Intel users get a separate x64 link (alternativeDownloadUrl).
          architecture = 'arm64';
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

        const alternativeDownloadUrl =
          osName === 'macOS'
            ? `https://github.com/${repository}/releases/download/${latestVersion}/${getAssetName(osName, 'x64', latestVersion)}`
            : undefined;

        // 4. Update the state with the final asset information.
        setAsset({ osName, architecture, downloadUrl, alternativeDownloadUrl, version: latestVersion, isLoading: false });

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
