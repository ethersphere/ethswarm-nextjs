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
    <section className="relative text-gray-100 lg:mt-10">
      <Container className="relative h-full md:px-3 xl:px-0">
        <GridContainer className="md:items-end !px-5 lg:!px-14 lg:items-center border border-[#2D3843] rounded-xl bg-gradient-odyssey mx-6 md:mx-0 overflow-hidden md:overflow-visible">
          <Header
            tagline={tagline}
            content={content}
            title={title}
            ctas={ctas}
            className="col-span-12 py-8 md:col-span-6 "
          />
          <div className="flex items-end h-full col-span-12 md:col-start-8 md:col-span-5">
            <img
              loading="lazy"
              src="/assets/odyssey_background.png"
              alt="Odyssey Graphic"
              className="object-contain md:-mt-10 object-right w-[calc(100%+40px)] md:max-w-full -mx-5 pointer-events-none md:mx-0 max-w-none"
            />
          </div>
        </GridContainer>
      </Container>
    </section>
  );
};

export default Odyssey;
