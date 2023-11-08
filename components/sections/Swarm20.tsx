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
    <section className="relative flex flex-col items-center justify-end overflow-hidden text-gray-100 bg-gray-800">
      <Container className="relative flex flex-col h-full pt-20 pb-16 md:pb-44 md:pt-56">
        <img
          src="/assets/swarm20.png"
          alt="Swarm 2.0 Graphic"
          className="absolute bottom-0 right-0 hidden pointer-events-none md:block md:top-[56px] md:h-4/5 h-1/2"
        />
        <Tagline copy={tagline} />

        <div className="z-20 mb-8 md:mb-12">
          <h2
            className="inline-flex flex-wrap font-bold text-4xl md:text-[64px] md:leading-[70px] tracking-[-0.01em] gap-3 items-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <SectionContent
          className="z-20 text-gray-100 mb-14"
          content={content}
        />

        <ButtonGroup ctas={ctas} className="mb-4" />
      </Container>

      <img
        src="/assets/swarm20.png"
        alt="Swarm 2.0 Graphic"
        className="object-contain object-right w-screen -mt-40 pointer-events-none max-h-96 md:hidden"
      />
    </section>
  );
};

export default Swarm20;
