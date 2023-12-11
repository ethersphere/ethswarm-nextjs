import * as React from "react";
import { Container, Header } from "@/components/common";
import { CtaType } from "types";
import GridContainer from "../common/GridContainer";

type LandingHero = {
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const LandingHero: React.FC<LandingHero> = ({ title, content = "", ctas }) => {
  return (
    <section className="relative flex flex-col items-center justify-end h-full ">
      <Container className="relative z-10 flex flex-col justify-center w-full h-screen pt-20 pb-16 md:pb-36 md:pt-56 ">
        <GridContainer>
          <Header
            title={title}
            content={content}
            ctas={ctas}
            size="large"
            className="col-span-12 texwt-gray-100 lg:col-span-7"
          />
        </GridContainer>
      </Container>

      <img
        src="/assets/hero/landing_hero.png"
        alt="Hero cover image"
        className="absolute z-0 top-0 right-0 object-contain object-top  pointer-events-none h-[130vh]"
      />
    </section>
  );
};

export default LandingHero;
