import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType } from "types";

type Swarm20Props = {
  title: string;
  tagline?: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const Swarm20: React.FC<Swarm20Props> = ({
  title,
  tagline,
  content = "",
  ctas,
}) => {
  return (
    <section className="relative flex flex-col items-center justify-end h-full  text-gray-100 bg-[#0D1216]">
      <Container className="relative flex flex-col h-full pt-20 pb-16 md:pb-36 md:pt-56 ">
        {/* <img
          src="/assets/hero/landing_hero.png"
          alt="Swarm 2.0 Graphic"
          className="absolute bottom-0 right-0 xl:-right-12 2xl:right-0 hidden pointer-events-none md:block md:top-[56px] md:h-4/5 h-1/2"
        /> */}
        {/* <Tagline copy={tagline} /> */}
        {/* Same height as the tagline, show if there is no tagline */}
        <div className="h-[60px] md:h-[76px]" />

        <div className="z-20 mb-8 md:mb-6 max-w-[50%]">
          <h2
            className="inline-flex flex-wrap font-bold text-4xl md:text-[88px] md:leading-[97px] tracking-[-0.88px] gap-3 items-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <SectionContent
          className="z-20 text-gray-100 mb-14 max-w-[50%]"
          content={content}
        />

        <ButtonGroup ctas={ctas} className="mb-4 max-w-[50%]" />
      </Container>

      <img
        src="/assets/hero/landing_hero.png"
        alt="Swarm 2.0 Graphic"
        className="absolute top-0 right-0 object-contain object-top  pointer-events-none h-[130vh]"
      />
    </section>
  );
};

export default Swarm20;
