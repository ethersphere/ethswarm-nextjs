import React from "react";
import SecondaryHero from "./SecondaryHero";
import ContentContainer from "./ContentContainer";
import { cx } from "utils";

type SectionProps = {
  index: number;
  hero?: any; // Hero type?
  items?: any;
};

const Section: React.FC<SectionProps> = ({ index, hero, items = [] }) => {
  return (
    <section className="pb-20 md:pb-40 md:overflow-hidden">
      {hero ? <SecondaryHero index={index} {...hero} /> : ""}

      {items && items.length > 0 && (
        <div className="flex flex-col items-center space-y-16 md:space-y-32">
          {items.map((item: any, index: number) => (
            <ContentContainer key={index} {...item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Section;
