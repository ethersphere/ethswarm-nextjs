import { useState, useEffect } from 'react';

interface Cache {
  // Define your cache structure here
  data: any;
  timestamp: number;
}

const useGitHubAssets = (repository: string) => {
  const [assets, setAssets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const cacheKey = `github-assets-${repository}`;
    
    try {
      // Safe localStorage access
      const cachedData = localStorage.getItem(cacheKey);
      let cache: Cache | null = null;
      
      if (cachedData) {
        cache = JSON.parse(cachedData) as Cache;
      }
      
      // Check if cache is still valid (e.g., less than 1 hour old)
      const now = Date.now();
      const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
      
      if (cache && (now - cache.timestamp) < CACHE_DURATION) {
        setAssets(cache.data);
        setLoading(false);
        return;
      }
      
      // Fetch fresh data if no valid cache
      fetchGitHubAssets();
      
    } catch (err) {
      console.error('Error accessing localStorage:', err);
      fetchGitHubAssets();
    }

    async function fetchGitHubAssets() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`);
        const data = await response.json();
        
        // Save to localStorage
        const cacheData: Cache = {
          data,
          timestamp: Date.now()
        };
        
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        setAssets(data);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    
  }, [repository]);

  return { assets, loading, error };
};

export default useGitHubAssets;
