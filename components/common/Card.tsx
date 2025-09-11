import React, { useEffect, useState } from "react";
import { CardType } from "types";
import { cn } from "utils";
import ButtonGroup from "./ButtonGroup";
import Icon from "./Icon";
import Image from "next/image";
import { Button, Status } from ".";
import markdownToHtml from "lib/markdownToHtml";

type CardProps = CardType;

const Card: React.FC<CardProps> = ({
  className = "",
  title,
  ctas,
  icon,
  image,
  value,
  content,
  status,
  cta,
}) => {
  const [md, setMd] = useState(content);

  useEffect(() => {
    markdownToHtml(content).then((html) => {
      setMd(html);
    });
  }, [content]);

  return (
    <div
      className={cn(
        "col-span-12 md:col-span-6 lg:col-span-4 border border-[#2D3843] rounded-xl overflow-hidden bg-[#1F2831]/70 shadow-dark",
        className
      )}
    >
      {image && (
        <Image
          src={image.src}
          width={350}
          height={200}
          alt={image.alt}
          className="object-cover w-full aspect-video"
        />
      )}
      <div className="flex flex-col items-start px-5 py-8 space-y-4">
        {status && <Status status={status} />}

        <div className="flex items-center">
          {icon && (
            <span className="shrink-0 inline-block mr-4 overflow-hidden rounded-full">
              <Icon icon={icon} className="h-7 text-[#F6F7F9]" />
            </span>
          )}
          <h4 className="inline font-bold text-[#F6F7F9] text-[17px] leading-6">
            {title}
          </h4>
        </div>

        {value && value.length > 0 && (
          <div className="text-3xl font-bold leading-[1.2] text-orange-500">
            {value}
          </div>
        )}

        {content && content.length > 0 && (
          <div
            className="text-[#F6F7F9] opacity-80 text-sm leading-5 prose"
            dangerouslySetInnerHTML={{ __html: md ?? "" }}
          />
        )}

        {ctas && ctas.length > 0 && <ButtonGroup ctas={ctas} />}
        {cta && <ButtonGroup ctas={[cta]} />}
      </div>
    </div>
  );
};

export default Card;
