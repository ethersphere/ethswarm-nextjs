// From https://github.com/ethersphere/swarm-app-page

import { useEffect, useState } from "react";

type Cache = {
  timestamp: number;
  assets: Asset[];
};

export type Asset = {
  browser_download_url: string;
  name: string;
  content_type: string;
};

const API = "https://api.github.com/repos/";
const CACHE_VALIDITY = 60 * 60 * 1000;

const getLastRelease = async (repo: string) => {
  const request = await fetch(API + repo + "/releases/latest");
  const json = await request.json();
  if (request.status !== 200) {
    throw new Error(json.message);
  }
  return json;
};

const getAssets = async (repo: string, id: number) => {
  const request = await fetch(API + repo + "/releases/" + id + "/assets");
  const json = await request.json();
  if (request.status !== 200) {
    throw new Error(json.message);
  }
  return json;
};

const getCacheKey = (repo: string) => `github.assets.${repo}`;

const getCache = (repo: string) => {
  const cacheKey = getCacheKey(repo);
  let cache: Cache | null = null;

  try {
    cache = JSON.parse(localStorage.getItem(cacheKey) as string) as Cache;
  } catch (_) {
    // NOTE: No need to do anything, we just assume there's no cache
  }

  if (cache && cache.timestamp > Date.now() - CACHE_VALIDITY) {
    return cache.assets;
  }
};

const setCache = (repo: string, assets: Asset[]) => {
  localStorage.setItem(
    getCacheKey(repo),
    JSON.stringify({
      timestamp: Date.now(),
      assets,
    })
  );
};

export const useGithubAssets = (repo: string) => {
  const [assets, setAssets] = useState<Asset[]>();

  useEffect(() => {
    const cache = getCache(repo);
    if (cache) {
      setAssets(cache);
      return;
    }

    (async () => {
      const release = await getLastRelease(repo);
      const assets = await getAssets(repo, release.id);
      setCache(repo, assets);
      setAssets(assets);
    })();
  }, [repo]);

  return assets;
};
