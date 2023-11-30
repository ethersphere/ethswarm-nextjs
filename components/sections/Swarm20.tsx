import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType } from "types";
import { Header } from "./Header";

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
        <Header title={title} content={content} ctas={ctas} />
      </Container>

      <img
        src="/assets/hero/landing_hero.png"
        alt="Hero cover image"
        className="absolute top-0 right-0 object-contain object-top  pointer-events-none h-[130vh]"
      />
    </section>
  );
};

export default Swarm20;
