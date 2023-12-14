import * as React from "react";
import { Container, Header } from "@/components/common";
import { CtaType } from "types";
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
      <Container className="relative h-full md:px-3 xl:px-0">
        <GridContainer className="items-center border !px-5 lg:!px-14 mx-6 md:mx-0 border-[#2D3843] rounded-xl bg-gradient-fairdata">
          <Header
            tagline={tagline}
            content={content}
            title={title}
            ctas={ctas}
            className="col-span-12 py-24 md:col-span-6"
          />
          <img
            loading="lazy"
            src="/assets/fds_graphic.png"
            alt="Odyssey Graphic"
            className="object-contain object-right h-full col-span-12 -mx-5 pointer-events-none md:mx-0 md:col-span-6 md:col-start-7 lg:ml-14"
          />
        </GridContainer>
      </Container>
    </section>
  );
};

export default FairdDriveSection;
