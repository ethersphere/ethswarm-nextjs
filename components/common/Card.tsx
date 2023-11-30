import * as React from "react";
import { CardType } from "types";
import { cn } from "utils";
import ButtonGroup from "./ButtonGroup";

type CardProps = CardType;

const Card: React.FC<CardProps> = ({
  className = "",
  title,
  ctas,
  icon,
  content,
}) => {
  return (
    <div
      className={cn(
        "col-span-4 border border-[#2D3843] rounded-xl bg-[#1F2831]/70 py-8 px-5 shadow-dark space-y-4 flex flex-col",
        className
      )}
    >
      <div className="">
        {icon && <span className="inline-block w-5 mr-4">{icon}</span>}
        <h4 className="inline font-bold text-[#F6F7F9] text-[17px] leading-6">
          {title}
        </h4>
      </div>

      {content && content.length > 0 && (
        <div
          className="text-[#F6F7F9] opacity-80 text-sm leading-5 grow prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {ctas && ctas.length > 0 && <ButtonGroup ctas={ctas} />}
    </div>
  );
};

export default Card;
