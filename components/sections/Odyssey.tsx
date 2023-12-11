import * as React from "react";
import {
  ButtonGroup,
  Container,
  Header,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType } from "types";
import GridContainer from "../common/GridContainer";

type OdysseyProps = {
  title: string;
  tagline?: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const Odyssey: React.FC<OdysseyProps> = ({
  title,
  tagline,
  content = "",
  ctas,
}) => {
  return (
    <section className="relative text-gray-100">
      <Container className="relative h-full border border-[#2D3843] rounded-xl bg-gradient-odyssey">
        <GridContainer className="items-center">
          <Header
            tagline={tagline}
            content={content}
            title={title}
            ctas={ctas}
            className="col-span-12 lg:col-span-6 "
          />
          <img
            loading="lazy"
            src="/assets/odyssey_background.png"
            alt="Odyssey Graphic"
            className="object-contain object-right -mt-10 pointer-events-none lg:col-start-8 lg:col-span-5"
          />
        </GridContainer>
      </Container>
    </section>
  );
};

export default Odyssey;
