import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  RegularLink,
  Tagline,
} from "@/components/common";
import { CtaType } from "types";
import Quote from "./Hero/Quote";

import { ArrowIcon } from "@/icons/components/index";

type SummitProps = {
  title: string;
  tagline?: string;
  content?: string;
  ctas?: Array<CtaType>;
  quote: {
    title: string;
    href?: string;
    background_gradient?: boolean;
  };
  cta?: CtaType;
};

const Summit: React.FC<SummitProps> = ({
  title,
  tagline,
  content = "",
  ctas,
  quote,
  cta,
}) => {
  return (
    <section
      className="relative flex flex-col items-center h-full min-h-screen overflow-hidden text-gray-100 bg-gray-800"
      id="summit"
    >
      <Container className="flex flex-col justify-end grow pb-20 sm:pb-32 pt-28 sm:pt-60">
        <div className="sm:w-2/3">
          <Tagline copy={tagline} />

          <div className="mb-8 md:mb-12">
            <h2 className="inline-flex flex-wrap font-bold text-4xl md:text-[64px] tracking-[-0.01em] gap-3 items-center md:leading-[70px]">
              Swarm Virtual
              <br />
              Summit 21-23 June
            </h2>
          </div>
          <SectionContent className="text-gray-100 mb-14" content={content} />
          <ButtonGroup ctas={ctas} className="mb-4" />
        </div>

        <img
          src="/assets/summit.png"
          alt="Summit Graphic"
          className="absolute bottom-0 right-0 hidden pointer-events-none md:block md:top-8 md:h-full h-1/2 xl:-right-16 2xl:right-0"
        />
      </Container>

      <img
        src="/assets/summit.png"
        alt="Summit Graphic"
        className="object-contain w-screen -mt-40 pointer-events-none max-h-96 md:hidden"
      />

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

export default Summit;
