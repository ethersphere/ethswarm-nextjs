// From https://github.com/ethersphere/swarm-app-page

import { useEffect, useState } from "react";

// Hooks
import { Asset, useGithubAssets } from "./useGitHubAssets";

type OsAsset = {
  osName: string;
  asset?: Asset;
};

function getOsfromUA() {
  if (typeof window === "undefined") {
    return false;
  }

  const ua = window.navigator.userAgent;

  if (ua.includes("Mac")) {
    return "MacOS";
  } else if (ua.includes("Windows")) {
    return "Windows";
  } else if (ua.includes("Ubuntu")) {
    return "Debian";
  } else if (ua.includes("Debian")) {
    return "Debian";
  }

  return false;
}

const findAsset = (assets: Asset[] | undefined) => {
  if (!assets) {
    return;
  }

  const osName = getOsfromUA();

  for (const asset of assets) {
    switch (osName) {
      case "Windows":
        if (asset.content_type === "application/x-msdos-program") {
          return { osName, asset };
        }
        break;

      case "MacOS":
        if (asset.name.includes("x64.dmg")) {
          return { osName, asset };
        }
        break;

      case "Debian":
        if (asset.name.includes("amd64.deb")) {
          return { osName, asset };
        }
        break;

      default:
        return { osName: "Unknown" };
    }
  }
};

export const useOsAsset = (repo: string) => {
  const assets = useGithubAssets(repo);
  const [asset, setAsset] = useState<OsAsset | undefined>();

  useEffect(() => setAsset(findAsset(assets)), [assets]);

  return asset;
};
