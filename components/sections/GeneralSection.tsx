import * as React from "react";
import {
  ButtonGroup,
  CardList,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CardType, CtaType, FeatureType } from "types";
import { HeadingUnderline, FeatureList } from "@/components/common";
import cx from "../../utils/cx";

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
        "relative flex justify-center overflow-hidden",
        background,
        textColor
      )}
    >
      <Container className="flex flex-col py-20 md:py-40">
        <Tagline copy={content.tagline} />

        <div className="mb-8 md:mb-12">
          <HeadingUnderline
            title={content.title}
            background={background === "bg-black" ? "orange-onDark" : "orange"}
          />
        </div>

        <SectionContent className="mb-[72px]" content={content.content} />

        <FeatureList
          features={content.features ?? []}
          columns={content.features_type ?? "four"}
        />

        <CardList items={content.news ?? []} />

        <ButtonGroup ctas={content.ctas} className="mt-20 mb-4" />
      </Container>
    </section>
  );
};

export default GeneralSection;
