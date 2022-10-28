import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType } from "types";

type WikipediaProps = {
  titleSuffix: string;
  tagline?: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const Wikipedia: React.FC<WikipediaProps> = ({
  titleSuffix,
  tagline,
  content = "",
  ctas,
}) => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden text-black bg-gray-300">
      <img
        loading="lazy"
        src="/assets/wiki_background.png"
        alt="Wikipedia Graphic"
        className="absolute bottom-0 right-0 hidden pointer-events-none md:block md:top-0 md:h-full h-1/2"
      />
      <Container className="flex flex-col h-full pt-20 pb-16 md:pb-44 md:pt-40">
        <Tagline copy={tagline} />

        <div className="mb-8 md:mb-12">
          <h2 className="inline-flex flex-wrap font-bold text-4xl md:text-[64px] tracking-[-0.01em] gap-3 items-center">
            <img
              src="/assets/wiki_logo.png"
              alt="Wikipedia logo"
              className="h-[32px] md:h-[47px] inline"
            />
            <span>{titleSuffix}</span>
          </h2>
        </div>

        <SectionContent className="mb-14" content={content} />

        <ButtonGroup ctas={ctas} className="mb-4" />
      </Container>

      <img
        loading="lazy"
        src="/assets/wiki_background.png"
        alt="Wikipedia Graphic"
        className="object-contain object-right w-screen -mt-40 pointer-events-none max-h-96 md:hidden"
      />
    </section>
  );
};

export default Wikipedia;
