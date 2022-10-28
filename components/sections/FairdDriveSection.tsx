import * as React from "react";
import {
  ButtonGroup,
  Container,
  Feature,
  SectionContent,
  Tagline,
} from "@/components/common";
import { ButtonBackgroundType, ButtonTextColorType, CtaType } from "types";

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
    <section className="relative flex flex-col items-center overflow-hidden text-gray-100 bg-gray-800">
      <img
        loading="lazy"
        src="/assets/fds_graphic.png"
        alt="FairDataSociety Graphic"
        className="absolute bottom-0 right-0 z-0 hidden pointer-events-none lg:block md:top-0 md:h-full h-1/2"
      />
      <Container className="relative z-10 flex flex-col py-20 md:py-40">
        <Tagline copy={tagline} />

        <div className="mb-8 md:mb-12">
          <h2 className="inline-flex flex-wrap font-bold text-5xl md:text-[64px] tracking-[-0.01em] gap-3 items-center">
            {title}
          </h2>
        </div>

        <SectionContent className="text-gray-100" content={content} />

        <ButtonGroup ctas={ctas} className="mb-12 sm:mb-16 mt-14" />

        <div className="grid grid-cols-1 -ml-2 sm:m-l0 sm:grid-cols-2 lg:w-1/2 gap-y-8 sm:gap-y-0">
          <Feature
            title="fairOS"
            copyClass="text-gray-100"
            content={`→ filesystem on Swarm<br />→ key-value store<br />→ db doc<br />→ works in browser (WASM)`}
            cta={{
              title: "Documentation",
              href: "https://docs.fairos.fairdatasociety.org/",
              color: "gray",
            }}
          />
          <Feature
            title="fairDRIVE"
            copyClass="text-gray-100"
            content={`→ data wallet for end users<br />→ customise easily (white label)<br />→ GDPR support<br />→ fast development`}
            cta={{
              title: "Try Fairdrive",
              href: "https://fairdrive.fairdatasociety.org/",
              color: "gray",
            }}
          />
        </div>
      </Container>
      <img
        loading="lazy"
        src="/assets/fds_graphic.png"
        alt="FairDataSociety Graphic"
        className="object-contain object-right w-screen -mt-24 pointer-events-none max-h-96 md:hidden"
      />
    </section>
  );
};

export default FairdDriveSection;
