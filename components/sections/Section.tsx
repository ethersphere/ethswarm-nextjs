import React from "react";
import ContentContainer from "./ContentContainer";
import Disclaimer from "./Disclaimer";
import Hero from "./Hero";

type SectionProps = {
  disclaimer?: boolean;
  index: number;
  hero?: any; // Hero type?
  items?: any;
};

const Section: React.FC<SectionProps> = ({
  index,
  hero,
  items = [],
  disclaimer = false,
}) => {
  return (
    <section className="mb-32 md:mb-48">
      {hero ? <Hero index={index} {...hero} /> : ""}

      {items && items.length > 0 && (
        <div className="mt-32 space-y-24 md:space-y-48 md:mt-24">
          {items.map((item: any, index: number) => (
            <ContentContainer key={index} {...item} />
          ))}
        </div>
      )}

      {disclaimer ? <Disclaimer /> : ""}
    </section>
  );
};

export default Section;
