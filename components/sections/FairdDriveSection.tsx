import * as React from "react";
import {
  ButtonGroup,
  Container,
  Feature,
  Header,
  SectionContent,
  Tagline,
} from "@/components/common";
import { ButtonBackgroundType, ButtonTextColorType, CtaType } from "types";
import GridContainer from "../common/GridContainer";

type FairdDriveSectionProps = {
  tagline?: string;
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
};

const FairdDriveSection: React.FC<FairdDriveSectionProps> = ({
  tagline,
  title,
  content = "",
  ctas = [],
}) => {
  return (
    <section className="relative overflow-hidden text-gray-100">
      <Container className="relative h-full border border-[#2D3843] rounded-xl bg-gradient-odyssey">
        <GridContainer className="items-center">
          <Header
            tagline={tagline}
            content={content}
            title={title}
            ctas={ctas}
            className="col-span-6 py-24 "
          />
          <img
            loading="lazy"
            src="/assets/fds_graphic.png"
            alt="Odyssey Graphic"
            className="object-contain object-right h-full col-span-6 col-start-7 pointer-events-none ml-14"
          />
        </GridContainer>
      </Container>
    </section>
  );
};

export default FairdDriveSection;
