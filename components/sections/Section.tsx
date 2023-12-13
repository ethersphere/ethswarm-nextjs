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
  console.log(items);
  return (
    <section className="mb-20 md:mb-48">
      {hero ? <Hero index={index} {...hero} /> : ""}

      {items && items.length > 0 && (
        <div className="space-y-16 md:space-y-48 md:mt-40">
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
