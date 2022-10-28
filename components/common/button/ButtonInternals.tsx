import * as React from "react";
import { ArrowIcon } from "@/icons/components/index";

type ButtonInternalsProps = {
  title: string;
  arrow: boolean;
  back: boolean;
};

const ButtonInternals: React.FC<ButtonInternalsProps> = ({
  title,
  arrow,
  back,
}) => (
  <>
    {arrow && back && (
      <div className="relative w-4 h-4">
        <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 rotate-180 group-hover:-translate-x-4 group-hover:opacity-0" />
        <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 rotate-180 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    )}
    <span>{title}</span>

    {arrow && !back && (
      <div className="relative w-4 h-4">
        <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 group-hover:translate-x-4 group-hover:opacity-0" />
        <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    )}
  </>
);

export default ButtonInternals;
