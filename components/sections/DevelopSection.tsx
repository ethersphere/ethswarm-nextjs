import * as React from "react";
import {
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType, TabType } from "types";
import { HeadingUnderline } from "@/components/common";
import Tabs from "./Develop/Tabs";

type DevelopSectionProps = {
  tagline?: string;
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
  tabs?: Array<TabType>;
};

const DevelopSection: React.FC<DevelopSectionProps> = ({
  tagline,
  title,
  content,
  ctas,
  tabs,
}) => {
  return (
    <section className="relative flex justify-center overflow-hidden text-black">
      <Container className="py-20  md:py-40 gap-x-12 gap-y-16">
        <div className="flex flex-col">
          <Tagline copy={tagline} />

          <div className="w-3/4 mb-8 md:mb-12">
            <HeadingUnderline title={title} />
          </div>

          <SectionContent className="mb-14" content={content} />

          <ButtonGroup ctas={ctas} className="mb-4" />
        </div>

        <Tabs tabs={tabs} />
      </Container>
    </section>
  );
};

export default DevelopSection;
