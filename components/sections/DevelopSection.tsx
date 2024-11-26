import * as React from "react";
import { Container, Header } from "@/components/common";
import { CtaType, TabType } from "types";
import Tabs from "./Develop/Tabs";
import GridContainer from "../common/GridContainer";

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
    <section className="relative overflow-hidden text-[#F6F7F9] mb-48">
      <Container className="mb-20 ">
        <GridContainer>
          <Header
            tagline={tagline}
            title={title}
            content={content}
            ctas={ctas}
            className="col-span-12 lg:col-span-6"
          />
        </GridContainer>
      </Container>
      <Tabs tabs={tabs} />
    </section>
  );
};

export default DevelopSection;
