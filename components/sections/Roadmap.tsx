import { useState } from "react";
import { CtaType } from "types";
import { cx } from "utils";
import { Container } from "../common";
import GridContainer from "../common/GridContainer";
import Card from "../common/Card";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export type RoadmapItemType = {
  title: string;
  ctas?: Array<CtaType>;
  content: string;
  status: "completed" | "in-progress" | "next-up";
};

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
  const [progress, setProgress] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 20,
      },
      initial: items.length - 1,
      slideChanged(e) {
        console.log(e.track.details.rel === e.track.details.maxIdx);
        if (e.track.details.rel === e.track.details.maxIdx) setProgress(1);
        else if (e.track.details.rel === 0) setProgress(0);
        else setProgress(0.5);
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <section className="relative z-10 flex justify-center my-56" id={id}>
      <Container className="relative flex items-center w-full">
        <button
          className={cx(
            "absolute z-10 transition text-[#F6F7F94D] text-[20px]",
            progress === 0 ? "opacity-0 pointer-events-none" : ""
          )}
          onClick={() => instanceRef.current?.prev()}
        >
          {"<-"}
        </button>
        <GridContainer className="relative z-0 w-full">
          <div className=" bg-[#2D3843] col-span-12 h-px mb-5" />
          <div
            className="absolute top-0 w-full h-px col-span-4 col-start-5"
            style={{
              background:
                " linear-gradient(90deg, rgba(95, 109, 124, 0.00) 0%, #778797 51.56%, rgba(95, 109, 124, 0.00) 100%)",
            }}
          />
          <div ref={sliderRef} className="col-span-12 keen-slider">
            {items.map((item, index) => (
              <Card
                key={index}
                {...item}
                className={cx(
                  "keen-slider__slide",
                  item.status === "in-progress" ? "" : "opacity-60"
                )}
              />
            ))}
          </div>
        </GridContainer>
        <button
          className={cx(
            "absolute z-10 transition right-0 text-[#F6F7F94D] text-[20px]",
            progress === 1 ? "opacity-0 pointer-events-none" : ""
          )}
          onClick={() => instanceRef.current?.next()}
        >
          {"->"}
        </button>
      </Container>
    </section>
  );
};

export default Roadmap;
