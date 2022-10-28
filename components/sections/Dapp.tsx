import * as React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  SectionContent,
  Tagline,
} from "@/components/common";
import { CtaType, FeatureType } from "types";
import { HeadingUnderline, FeatureList } from "@/components/common";

type DappProps = {
  tagline?: string;
  title: string;
  features: Array<FeatureType>;
  ctas: Array<CtaType>;
};

const Dapp: React.FC<DappProps> = ({ tagline, title, features, ctas }) => {
  return (
    <section className="relative flex justify-center overflow-hidden text-black">
      <Container className="flex flex-col py-20 md:py-40">
        <Tagline copy={tagline} />

        <div className="mb-8 md:mb-16 md:w-1/2">
          <HeadingUnderline title={title} />
        </div>

        <FeatureList features={features} columns="four" />

        <ButtonGroup ctas={ctas} className="mt-16 mb-4" />

        {/* <div className="grid grid-cols-1 mt-16 md:grid-cols-2">
          <div className="">
            <h2 className="py-4 text-xl sm:text-2xl font-bold leading-[1.33]">
              Case study: Dracula markdown editor
            </h2>
            <ol className="pt-2 sm:pt-4 pb-4 sm:text-lg leading-[1.44]">
              <li>1. Forked </li>
              <li>2. Connected to FDP / fairDRIVE</li>
              <li>3. Hosted on Swarm</li>
            </ol>
            <div className="-ml-4">
              <Button
                href="https://app.dracula.fairdatasociety.org/"
                title="Try Dracula"
                background="transparent"
                color="black"
                arrow={true}
              />
            </div>
          </div>
          <div className="bg-black aspect-video"></div>
        </div> */}
      </Container>
    </section>
  );
};

export default Dapp;
