import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType, FeatureType } from "types";
import { HeadingUnderline, FeatureList } from "@/components/common";

type BountiesProps = {
  tagline?: string;
  title: string;
  content: string;
  features: Array<FeatureType>;
  ctas: Array<CtaType>;
};

const Bounties: React.FC<BountiesProps> = ({
  tagline,
  title,
  content,
  features,
  ctas,
}) => {
  return (
    <section className="relative flex justify-center overflow-hidden text-black">
      <Container className="flex flex-col py-20 md:py-40">
        <Tagline copy={tagline} />

        <div className="mb-8 md:mb-12">
          <HeadingUnderline title={title} />
        </div>

        <SectionContent className="mb-14" content={content} />

        <FeatureList features={features} columns="four" />

        <ButtonGroup ctas={ctas} className="mt-16 mb-4" />
      </Container>
    </section>
  );
};

export default Bounties;
