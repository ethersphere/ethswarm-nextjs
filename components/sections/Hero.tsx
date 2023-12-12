import * as React from "react";
import { Container, Header } from "@/components/common";
import { CtaType, ImageType } from "types";
import GridContainer from "../common/GridContainer";

type HeroProps = {
  title: string;
  background: ImageType;
  content: string;
  ctas?: Array<CtaType>;
  quote: {
    title: string;
    href?: string;
    background_gradient?: boolean;
  };
  cta?: CtaType;
};

const Hero: React.FC<HeroProps> = ({ title, background, content, ctas }) => {
  return (
    <section className="relative flex flex-col items-center min-h-full text-gray-100 ">
      <div
        className="h-[150vh] w-full absolute top-0 left-0 "
        style={{
          background: 'url("/assets/bg_gradient.jpg") no-repeat right top',
          backgroundSize: "contain",
        }}
      />
      <Container className="relative">
        <GridContainer className="items-center pt-32">
          <Header
            title={title}
            content={content}
            ctas={ctas}
            size="large"
            className="col-span-12 md:col-span-6"
          />
          <img
            src={background.src}
            alt={background.alt}
            className="col-span-12 row-start-1 md:row-auto md:col-span-6"
          />
        </GridContainer>
      </Container>
    </section>
  );
};

export default Hero;
