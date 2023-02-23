import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType } from "types";

type OdysseyProps = {
  title: string;
  tagline?: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const Odyssey: React.FC<OdysseyProps> = ({
  title,
  tagline,
  content = "",
  ctas,
}) => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden text-gray-100 bg-gray-800">
      <div className="absolute inset-0 flex justify-end w-full h-full">
        <div className="absolute h-full w-full inset-0 bg-[#FF7A00] mix-blend-multiply"></div>
        <img
          loading="lazy"
          src="/assets/odyssey_background.png"
          alt="Odyssey Graphic"
          className="bottom-0 right-0 hidden pointer-events-none md:block md:top-0 md:h-full h-1/2"
        />
      </div>

      <Container className="relative flex flex-col h-full pt-20 pb-16 md:pb-44 md:pt-40">
        <Tagline copy={tagline} />

        <div className="mb-8 md:mb-12">
          <h2 className="inline-flex flex-wrap font-bold text-4xl md:text-[64px] tracking-[-0.01em] gap-3 items-center">
            {title}
          </h2>
        </div>

        <SectionContent className="text-gray-100 mb-14" content={content} />

        <ButtonGroup ctas={ctas} className="mb-4" />
      </Container>

      <img
        loading="lazy"
        src="/assets/odyssey_background.png"
        alt="Odyssey Graphic"
        className="object-contain object-right w-screen -mt-40 pointer-events-none max-h-96 md:hidden"
      />
    </section>
  );
};

export default Odyssey;
