import * as React from "react";
import { Container, Tagline, Header } from "@/components/common";
import { CardType, CtaType, FeatureType } from "types";
import { HeadingUnderline, FeatureList } from "@/components/common";
import cx from "../../utils/cx";
import Card from "../common/Card";
import GridContainer from "../common/GridContainer";

type GeneralSectionProps = {
  background?: "bg-black" | "bg-gray-700" | "";
  textColor?: "text-black" | "text-gray-100";
  content: {
    tagline?: string;
    title: string;
    content?: string;
    features?: Array<FeatureType>;
    features_type?: "six" | "four";
    news?: Array<CardType>;
    ctas?: Array<CtaType>;
  };
};

const GeneralSection: React.FC<GeneralSectionProps> = ({
  content,
  background = "",
  textColor = "text-gray-100",
}) => {
  return (
    <section
      className={cx(
        "relative flex justify-center overflow-hidden ",
        background,
        textColor
      )}
    >
      <Container className="flex flex-col py-20 md:-mt-20 md:py-40">
        <GridContainer>
          <Header
            title={content.title}
            tagline={content.tagline}
            content={content.content}
            size="small"
            ctas={content.ctas}
            className="col-span-6"
          />
        </GridContainer>

        <GridContainer className="mt-20">
          {content.features &&
            content.features.map((item, index) => (
              <Card key={index} {...item} />
            ))}
        </GridContainer>
      </Container>
    </section>
  );
};

export default GeneralSection;
