import * as React from "react";

import { cx } from "utils";
import Button from "./Button";
import ButtonDownload from "./ButtonDownload";
import { ButtonBackgroundType, ButtonTextColorType, CtaType } from "types";

type ButtonGroupProps = {
  ctas?: Array<CtaType>;
  className?: string;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  ctas = [],
  className = "",
}) => {
  if (ctas.length === 0) {
    return null;
  }

  const buttonTypes: any = {
    default: Button,
    download: ButtonDownload,
  };

  return (
    <div
      className={cx(
        "flex gap-4 items-start sm:items-center flex-wrap",
        className
      )}
    >
      {ctas.map((cta, index) => {
        const ButtonTag: any = buttonTypes[cta.type ?? "default"];

        const buttonPadding =
          cta.background === "transparent" && index !== 0 ? "px-4" : "pr-4";

        return (
          <ButtonTag
            key={index}
            className={buttonPadding}
            background={cta.background as ButtonBackgroundType}
            color={cta.color as ButtonTextColorType}
            title={cta.title}
            back={cta.back}
            href={cta.href}
            arrow={cta.arrow}
          />
        );
      })}
    </div>
  );
};

export default ButtonGroup;
