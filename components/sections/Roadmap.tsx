import React from "react";
import { CtaType } from "types";
import { cx } from "utils";
import { ButtonGroup, Container, SectionContent } from "../common";
import RoadmapItem, { RoadmapItemType } from "./Roadmap/RoadmapItem";

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
  return (
    <section
      className="relative z-10 flex justify-center -mt-20 md:-mt-40"
      id={id}
    >
      <Container className="grid w-full grid-cols-1 gap-16 pb-16 sm:-ml-4 md:grid-cols-3 md:pb-32 md:gap-0">
        <div className="max-w-xs space-y-4 sm:px-2 md:px-4 md:space-y-12">
          <SectionContent fullWidth={true} content={sidebar?.content} />
          <ButtonGroup ctas={sidebar?.ctas} />
        </div>

        <div className="-ml-2 md:col-span-2 sm:ml-0 dotted-spaced pl-4 space-y-12 md:space-y-[72px]">
          {items.map((item, index) => (
            <RoadmapItem key={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
