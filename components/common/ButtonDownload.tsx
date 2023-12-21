import * as React from "react";
import { cx } from "utils";
import { ButtonBackgroundType, ButtonTextColorType } from "types";
import { useOsAsset } from "hooks/useOsAsset";

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
  let classNameBackground =
    "bg-orange-500 focus:outline-none  hover:bg-opacity-80";

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

  const asset: any = useOsAsset("ethersphere/swarm-desktop");

  // If asset does not exist or unknown platform, we return
  if (!asset || asset.osName === "Unknown") {
    return null;
  }

  const className = cx(
    "transition duration-200 items-center text-sm font-semibold px-4 text-[#F6F7F9] rounded-full leading-[2.3] group focus:outline-none",
    classNameBackground,
    classNameColor
  );

  return (
    <a
      href={asset.asset.browser_download_url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {`Download for ${asset.osName} ->`}
    </a>
  );
};

export default DownloadButton;
