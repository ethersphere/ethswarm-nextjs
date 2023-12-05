import * as React from "react";
import {
  ButtonGroup,
  Container,
  Header,
  RegularLink,
  SectionContent,
} from "@/components/common";
import { CtaType, ImageType } from "types";
import Quote from "./Hero/Quote";
import { ArrowIcon } from "@/icons/components/index";
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

const Hero: React.FC<HeroProps> = ({
  title,
  background,
  content,
  ctas,
  quote,
  cta,
}) => {
  return (
    <section className="relative flex flex-col items-center h-screen text-gray-100 ">
      <div
        className="h-[150vh] w-full absolute top-0 left-0"
        style={{
          background: 'url("/assets/bg_gradient.jpg") no-repeat center center',
        }}
      />
      <Container className="relative pb-20 sm:pb-32 pt-28 sm:pt-32">
        <GridContainer className="items-center">
          <Header
            title={title}
            content={content}
            ctas={ctas}
            size="large"
            className="col-span-6"
          />
          <img
            src={background.src}
            alt={background.alt}
            className="col-span-6"
          />
        </GridContainer>
      </Container>
    </section>
  );
};

export default Hero;
