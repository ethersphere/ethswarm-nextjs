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
    <section className="pb-20 md:pb-40">
      {hero ? <Hero index={index} {...hero} /> : ""}

      {items && items.length > 0 && (
        <div className="space-y-16 md:space-y-48">
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
