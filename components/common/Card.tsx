import * as React from "react";
import { CardType } from "types";
import Button from "./Button";
import cx from "utils/cx";
import RegularLink from "./RegularLink";

type CardProps = CardType;

const Card: React.FC<CardProps> = ({
  className = "",
  title,
  href,
  image,
  copy = "",
  cta,
  type = "regular",
  category = "",
  readTime = 0,
}) => {
  let tagline = "";

  if (category) {
    tagline = `#${category}`;
  }

  if (readTime) {
    tagline += ` · ${readTime} min read`;
  }

  return (
    <div className={className}>
      <RegularLink href={href}>
        <div className="text-sm font-medium uppercase text-gray-250 font-display">
          <span>{tagline}</span>
        </div>
        <div className="relative h-56 mt-3 mb-4 overflow-hidden bg-white sm:mb-8 sm:mt-4">
          {image && image.length > 0 && (
            <img
              src={image}
              alt=""
              className="absolute inset-0 object-cover w-full h-full"
              loading="lazy"
            />
          )}
        </div>
        <div className="">
          <h3
            className={cx(
              "mb-2 sm:mb-4 font-bold line-clamp-2 leading-[1.44]",
              type === "large" ? "text-lg md:text-2xl" : "text-lg"
            )}
          >
            {title}
          </h3>

          {copy.length > 0 && (
            <div
              className={cx(
                "mb-3 sm:mb-6 line-clamp-3",
                type === "large" ? "text-sm md:text-lg" : "text-sm"
              )}
            >
              {copy}
            </div>
          )}
        </div>
      </RegularLink>
      {cta && cta.href.length > 0 && (
        <div>
          <Button
            href={cta.href}
            title={cta.title}
            background="transparent"
            color="gray"
            arrow={true}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
