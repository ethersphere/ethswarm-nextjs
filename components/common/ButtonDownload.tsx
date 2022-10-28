import * as React from "react";
import { cx } from "utils";
import ButtonInternals from "./button/ButtonInternals";
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
    "bg-orange-500 focus:outline-none hover:bg-orange-hover";

  if (background === "transparent") {
    classNameBackground = "bg-orange-transparent focus:outline-none";
  } else if (background === "white") {
    classNameBackground = "bg-white focus:ring-white";
  } else if (background === "black") {
    classNameBackground = "bg-black focus:outline-none";
  } else if (background === "orange-onDark") {
    classNameBackground =
      "bg-orange-onDark focus:outline-none hover:bg-orange-hover";
  }

  let classNameColor = "text-black";

  if (color === "gray") {
    classNameColor = "text-gray-100";
  }

  const asset: any = useOsAsset("ethersphere/swarm-desktop");

  // If asset does not exist or unknown platform, we return
  if (!asset || asset.osName === "Unknown") {
    return null;
  }

  const className = cx(
    "transition duration-200 uppercase inline-flex justify-center items-center text-lg font-semibold tracking-wider px-4 py-2 font-display gap-3 group focus:outline-none",
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
      <ButtonInternals
        title={`Download for ${asset.osName}`}
        arrow={arrow}
        back={false}
      />
    </a>
  );
};

export default DownloadButton;
