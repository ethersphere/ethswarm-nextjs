import * as React from "react";
import Link from "next/link";
import { cx } from "utils";

import { ButtonBackgroundType, ButtonTextColorType } from "types";

type ButtonProps = {
  background: ButtonBackgroundType;
  href?: string;
  title?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  href = "",
  title = "",
  background = "orange",
  className = "",
}) => {
  let classNameBackground =
    "bg-orange-500 focus:outline-none text-[#F6F7F9] hover:bg-opacity-80 px-4";

  if (background === "transparent") {
    classNameBackground =
      " focus:outline-none text-[#F6F7F9] hover:text-opacity-70";
  } else if (background === "purple") {
    classNameBackground =
      "bg-[#7049F6] hover:bg-opacity-80  focus:ring-white px-4";
  } else if (background === "green") {
    classNameBackground =
      "bg-[#14FEC0] text-[#141516] hover:bg-opacity-80  focus:outline-none px-4";
  }

  const classNameButton = cx(
    "transition duration-200 inline-flex justify-center rounded-full items-center text-sm font-semibold  leading-[2.3]  font-display gap-3 group focus:outline-none",
    classNameBackground,
    className
  );

  if (!href) {
    return <button className={classNameButton}>{title}</button>;
  }

  // If href starts with http, we use anchor html tag, otherwise we use next/link
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classNameButton}
      >
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameButton}>
      {title}
    </Link>
  );
};

export default Button;
