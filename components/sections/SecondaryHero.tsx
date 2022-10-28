import * as React from "react";
import { ButtonGroup, Container, SectionContent } from "@/components/common";
import { CtaType, ImageType } from "types";
import { cx } from "utils";

type SecondaryHeroProps = {
  index: number;
  title: string;
  id?: string;
  background: ImageType;
  content: string;
  footnote?: string;
  ctas?: Array<CtaType>;
};

const SecondaryHero: React.FC<SecondaryHeroProps> = ({
  index = 0,
  id = "",
  title,
  background,
  content,
  ctas,
  footnote,
}) => {
  return (
    <div id={id} className="relative flex justify-center">
      {/* Whitelist Tailwind classes */}
      <div className="absolute hidden pointer-events-none top-32 md:left-16 md:left-32" />

      {background &&
        background.src.length > 0 &&
        (background.position || background.position === "container") && (
          <img
            className={cx(
              "absolute right-0 md:left-0 top-20 md:top-48 w-[133vw] md:w-[100vw] max-w-[1680px] mx-auto z-10",
              background.class
            )}
            src={background.src}
            alt={background.alt}
          />
        )}

      <div className="absolute z-0 w-screen min-h-screen pointer-events-none bg-gray-gradient"></div>
      <Container
        className={cx(
          "w-full z-10 relative flex flex-col justify-end pt-64 pb-16 md:pb-44",
          index === 0 ? "md:min-h-[850px]" : "md:min-h-[749px]"
        )}
      >
        <h1 className="font-bold text-6xl lg:text-[88px] tracking-[-0.01em] leading-[1.1] py-10">
          {title}
        </h1>

        {background &&
          background.src.length > 0 &&
          (!background.position || background.position !== "container") && (
            <img
              className={cx(
                "absolute right-0 top-24 md:top-auto md:bottom-9 w-1/2",
                background.class
              )}
              src={background.src}
              alt={background.alt}
            />
          )}

        <SectionContent className="md:pr-16" content={content} />
        <ButtonGroup className="py-4 mt-8" ctas={ctas} />

        {footnote && footnote.length > 0 && (
          <div
            className="max-w-lg py-4 pr-8 italic prose-sm prose"
            dangerouslySetInnerHTML={{
              __html: footnote,
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default SecondaryHero;
