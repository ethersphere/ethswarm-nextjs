import * as React from "react";
import Link from "next/link";
import { cx } from "utils";
import ButtonInternals from "./button/ButtonInternals";
import { ButtonBackgroundType, ButtonTextColorType } from "types";

type ButtonProps = {
  background: ButtonBackgroundType;
  color: ButtonTextColorType;
  href?: string;
  title?: string;
  arrow?: boolean;
  back?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  href = "",
  title = "",
  arrow = false,
  background = "orange",
  color = "black",
  className = "",
  back = false,
}) => {
  let classNameBackground =
    "bg-orange-500 focus:outline-none hover:bg-orange-hover px-4";

  if (background === "transparent") {
    classNameBackground =
      "bg-orange-transparent focus:outline-none hover:text-gray-500";
  } else if (background === "white") {
    classNameBackground = "bg-white focus:ring-white px-4";
  } else if (background === "black") {
    classNameBackground = "bg-black focus:outline-none px-4";
  } else if (background === "orange-onDark") {
    classNameBackground =
      "bg-orange-onDark focus:outline-none hover:bg-orange-hover px-4";
  }

  let classNameColor = "text-black";

  if (color === "gray") {
    classNameColor = "text-gray-100";
  }

  const classNameButton = cx(
    "transition duration-200 uppercase inline-flex justify-center items-center text-lg font-semibold tracking-wider py-2.5 font-display gap-3 group focus:outline-none",
    classNameBackground,
    classNameColor,
    className
  );

  // If href starts with http, we use anchor html tag, otherwise we use next/link
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classNameButton}
      >
        <ButtonInternals title={title} arrow={arrow} back={back} />
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={classNameButton}>
        <ButtonInternals title={title} arrow={arrow} back={back} />
      </a>
    </Link>
  );
};

export default Button;
