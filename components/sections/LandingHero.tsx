import * as React from "react";
import { Container } from "@/components/common";
import { Header } from "@/components/index";
import { CtaType } from "types";

type LandingHero = {
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const LandingHero: React.FC<LandingHero> = ({ title, content = "", ctas }) => {
  return (
    <section className="relative flex flex-col items-center justify-end h-full ">
      <Container className="relative flex flex-col justify-center w-full h-screen pt-20 pb-16 md:pb-36 md:pt-56 ">
        <Header
          title={title}
          content={content}
          ctas={ctas}
          size="large"
          className="max-w-[50%] text-gray-100"
        />
      </Container>

      <img
        src="/assets/hero/landing_hero.png"
        alt="Hero cover image"
        className="absolute top-0 right-0 object-contain object-top  pointer-events-none h-[130vh]"
      />
    </section>
  );
};

export default LandingHero;