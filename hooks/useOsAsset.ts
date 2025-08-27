import { useState, useEffect } from 'react';

interface AssetInfo {
  osName: string;
  downloadUrl?: string;
  // Add other properties as needed
}

const useOsAsset = (repository: string): AssetInfo => {
  const [asset, setAsset] = useState<AssetInfo>({ osName: '' });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const ua = window.navigator.userAgent;
    
    // Detect OS
    let osName = 'Unknown';
    
    if (ua.includes('Win')) {
      osName = 'Windows';
    } else if (ua.includes('Mac')) {
      osName = 'macOS';
    } else if (ua.includes('Linux') && !ua.includes('Android')) {
      osName = 'Linux';
    } else if (ua.includes('Android')) {
      osName = 'Android';
    } else if (ua.includes('iPhone') || ua.includes('iPad')) {
      osName = 'iOS';
    }
    
    // You can use the repository parameter to fetch or determine download URLs
    const downloadUrl = `https://github.com/${repository}/releases/latest/download/${getAssetName(osName)}`;
    
    setAsset({ osName, downloadUrl });
  }, [repository]);

  return asset;
};

// Helper function to map OS to asset filename
const getAssetName = (osName: string): string => {
  switch (osName) {
    case 'Windows':
      return 'swarm-desktop-windows.exe';
    case 'macOS':
      return 'swarm-desktop-macos.dmg';
    case 'Linux':
      return 'swarm-desktop-linux.AppImage';
    default:
      return '';
  }
};

export { useOsAsset };
export default useOsAsset;
