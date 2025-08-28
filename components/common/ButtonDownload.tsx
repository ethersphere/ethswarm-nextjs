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

  let classNameColor = "text-[#0D1216]";
  if (color === "gray") {
    classNameColor = "text-gray-100";
  } else if (color === "white") {
    classNameColor = "text-white";
  }

  const assetInfo = useOsAsset("ethersphere/swarm-desktop");

  // Check if the OS was detected and a download URL was generated.
  // The component will not render if the OS is unknown or the URL is missing.
  if (!assetInfo || assetInfo.osName === "Unknown" || !assetInfo.downloadUrl) {
    return null;
  }

  const className = cx(
    "transition duration-200 inline-flex items-center text-sm font-semibold px-4 text-center rounded-full leading-[2.3] group focus:outline-none",
    classNameBackground,
    classNameColor
  );

  const downloadText = "Download for " + assetInfo.osName + " ->";

  return (
    <a
      href={assetInfo.downloadUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {downloadText}
    </a>
  );
};

export default DownloadButton;

