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
    <section className="relative flex flex-col items-center justify-end h-full">
      <Container className="relative z-10 flex flex-col justify-end w-full pb-8 pt-96 lg:h-screen md:justify-center md:pb-36 md:pt-56 ">
        <GridContainer>
          <Header
            title={title}
            content={content}
            ctas={ctas}
            size="dynamic"
            className="col-span-12 texwt-gray-100 lg:col-span-7"
          />
        </GridContainer>
      </Container>

      <video
        autoPlay
        muted
        playsInline={true}
        className="absolute z-0 top-0 right-0 object-contain pointer-events-none md:object-top object-top-right max-w-3xl sm:max-w-full mt-0 md:h-[150vh]"
      >
        <source src="/assets/doors_v3.mp4" type="video/mp4" />
      </video>
      {/* <img
        src="/assets/hero/door.png"
        alt="Hero cover image"
        className="absolute z-0 top-0 right-0 object-contain object-top pointer-events-none h-[90vh] md:h-[150vh]"
      />
      <img
        src="/assets/hero/blending.png"
        alt="Hero cover image"
        className="absolute z-0 top-0 right-0 object-contain object-top pointer-events-none h-[90vh] md:h-[150vh] mix-blend-color"
      /> */}
    </section>
  );
};

export default LandingHero;
