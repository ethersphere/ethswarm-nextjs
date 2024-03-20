import * as React from "react";
import { Container, Header } from "@/components/common";
import { CtaType, ImageType } from "types";
import GridContainer from "../common/GridContainer";

type HeroProps = {
  title: string;
  background?: ImageType;
  content?: string;
  ctas?: Array<CtaType>;
  cta?: CtaType;
  titleSize?: "small" | "medium" | "large";
};

const Hero: React.FC<HeroProps> = ({
  title,
  background,
  content,
  ctas,
  titleSize = "large",
}) => {
  return (
    <section className="relative flex flex-col items-center min-h-full text-gray-100 ">
      <div
        className="h-[150vh] w-full absolute top-0 left-0 "
        style={{
          background: 'url("/assets/bg_gradient.jpg") no-repeat right top',
          backgroundSize: "contain",
        }}
      />
      <Container className="relative w-full">
        <GridContainer className="items-center pt-32">
          <Header
            title={title}
            content={content}
            ctas={ctas}
            size={titleSize}
            className={
              background
                ? "col-span-12 md:col-span-6 md:py-24"
                : "col-span-12 md:col-span-11 md:py-24"
            }
          />
          {background && (
            <img
              src={background.src}
              alt={background.alt}
              className="col-span-12 row-start-1 md:row-auto md:col-span-6"
            />
          )}
        </GridContainer>
      </Container>
    </section>
  );
};

export default Hero;
