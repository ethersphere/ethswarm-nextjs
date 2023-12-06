import React from "react";
import { CtaType } from "types";
import { cx } from "utils";
import { Container } from "../common";
import { RoadmapItemType } from "./Roadmap/RoadmapItem";
import GridContainer from "../common/GridContainer";
import Card from "../common/Card";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

type RoadmapProps = {
  border?: boolean;
  content: string;
  id?: string;
  items: Array<RoadmapItemType>;
  sidebar?: {
    content?: string;
    ctas?: Array<CtaType>;
  };
};

const Roadmap: React.FC<RoadmapProps> = ({ items, sidebar, id }) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 20,
      },
      initial: items.length - 1,
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <section
      className="relative z-10 flex justify-center -mt-20 md:-mt-40"
      id={id}
    >
      <Container className="relative flex items-center w-full">
        <button className="absolute text-[#F6F7F94D] text-[20px]">
          {"<-"}
        </button>
        <GridContainer className="w-full">
          <div ref={sliderRef} className="col-span-12 keen-slider">
            {items.map((item, index) => (
              <Card key={index} {...item} className="keen-slider__slide" />
            ))}
          </div>
        </GridContainer>
        <button className="absolute right-0 text-[#F6F7F94D] text-[20px]">
          {"->"}
        </button>
      </Container>
    </section>
  );
};

export default Roadmap;
