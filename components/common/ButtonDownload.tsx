import React from "react";
import { cx } from "utils";
import { ButtonBackgroundType, ButtonTextColorType } from "types";
import useOsAsset from "hooks/useOsAsset";

type ButtonProps = {
  background: ButtonBackgroundType;
  color: ButtonTextColorType;
  arrow?: boolean;
};

const DownloadButton: React.FC<ButtonProps> = ({
  arrow = false,
  background = "orange",
  color = "black",
}) => {
  let classNameBackground = "bg-orange-500 focus:outline-none hover:bg-opacity-80";
  
  if (background === "transparent") {
    classNameBackground = "bg-orange-transparent focus:outline-none";
  } else if (background === "white") {
    classNameBackground = "bg-white focus:ring-white";
  } else if (background === "black") {
    classNameBackground = "bg-black focus:outline-none";
  }

  let classNameColor = "text-[#F6F7F9]";
  if (color === "gray") {
    classNameColor = "text-gray-100";
  }

  const assetInfo = useOsAsset("ethersphere/swarm-desktop");

  // If asset does not exist, unknown platform, or still loading, don't render
  if (!assetInfo || assetInfo.osName === "Unknown") {
    return null;
  }

  // Type assertion to access the asset property safely
  const typedAssetInfo = assetInfo as any;
  
  // Check if we have the asset data
  if (!typedAssetInfo.asset || !typedAssetInfo.asset.browser_download_url) {
    return null;
  }

  const className = cx(
    "transition duration-200 items-center text-sm font-semibold px-4 text-[#F6F7F9] rounded-full leading-[2.3] group focus:outline-none",
    classNameBackground,
    classNameColor
  );

  const downloadText = "Download for " + assetInfo.osName + " ->";

  return (
    <a
      href={typedAssetInfo.asset.browser_download_url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {downloadText}
    </a>
  );
};

export default DownloadButton;
