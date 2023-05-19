import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType } from "types";

type SummitProps = {
  title: string;
  tagline?: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const Summit: React.FC<SummitProps> = ({
  title,
  tagline,
  content = "",
  ctas,
}) => {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden text-gray-100 bg-gray-800"
      id="summit"
    >
      <Container className="relative flex flex-col min-h-full !h-auto pt-20 pb-16 md:pb-44 md:pt-40">
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
    </section>
  );
};

export default Summit;
