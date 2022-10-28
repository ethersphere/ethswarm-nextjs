import * as React from "react";
import {
  ButtonGroup,
  Container,
  RegularLink,
  SectionContent,
} from "@/components/common";
import { CtaType, ImageType } from "types";
import Quote from "./Hero/Quote";
import { ArrowIcon } from "@/icons/components/index";

type HeroProps = {
  title: string;
  background: ImageType;
  content: string;
  ctas?: Array<CtaType>;
  quote: string;
  cta?: CtaType;
};

const Hero: React.FC<HeroProps> = ({
  title,
  background,
  content,
  ctas,
  quote,
  cta,
}) => {
  return (
    <section className="relative flex flex-col items-center h-full min-h-screen overflow-hidden text-gray-100 bg-gray-800">
      <div className="absolute inset-0 flex items-start justify-end w-full h-full overflow-hidden pointer-events-none">
        <img
          src={background.src}
          alt={background.alt}
          className="w-[80vw] sm:w-[66vw] md:-mr-32 lg:w-[70vw] lg:-mr-64 xl:-mr-40 2xl:-mr-52 top-0 z-0 object-contain"
        />
      </div>

      <Container className="flex flex-col justify-end flex-grow pb-20 sm:pb-32 pt-28 sm:pt-60">
        <h1 className="text-5xl sm:text-6xl md:text-[88px] font-bold leading-[1.1] tracking-[-0.01em] mb-6 sm:mb-10 max-w-xl md:max-w-2xl">
          {title}
        </h1>

        <SectionContent
          className="mb-4 text-gray-100 sm:mb-8"
          content={content}
        />

        <ButtonGroup ctas={ctas} className="my-4" />
      </Container>

      {cta && cta.title && cta.href ? (
        <div className="flex items-center justify-center w-full px-6 py-1 font-semibold tracking-wider text-center text-gray-100 bg-gray-500 sm:text-lg sm:px-8 sm:py-1 font-display">
          <RegularLink href={cta.href} className="flex items-center py-3 group">
            <span>{cta.title}</span>
            <div className="relative w-4 h-4 ml-2">
              <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 group-hover:translate-x-4 group-hover:opacity-0" />
              <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </RegularLink>
        </div>
      ) : (
        <Quote quote={quote} />
      )}
    </section>
  );
};

export default Hero;
