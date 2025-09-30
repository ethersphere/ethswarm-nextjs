import * as React from "react";
import { Container, Header, Video } from "@/components/common";
import { CardType, CtaType } from "types";
import cx from "../../utils/cx";
import Card from "../common/Card";
import GridContainer from "../common/GridContainer";

type GeneralSectionProps = {
  textColor?: "text-black" | "text-gray-100";
  className?: string;
  content: {
    tagline?: string;
    title: string;
    content?: string;
    cards?: Array<CardType>;
    ctas?: Array<CtaType>;
    video?: {
      url: string;
      thumbnail?: string;
      autoplay?: boolean;
      inline?: boolean;
    };
  };
};

const GeneralSection: React.FC<GeneralSectionProps> = ({
  className = "",
  content,
  textColor = "text-gray-100",
}) => {
  return (
    <section
      className={cx(
        "relative flex justify-center overflow-hidden ",
        textColor,
        className
      )}
    >
      <Container className="flex flex-col py-40 md:py-48">
        <GridContainer>
          <Header
            title={content.title}
            tagline={content.tagline}
            content={content.content}
            size="medium"
            ctas={content.ctas}
            className="col-span-12 lg:col-span-6"
          />
        </GridContainer>

        {content.video && (
          <GridContainer className="mt-20">
            <div className="col-span-12">
              <Video
                url={content.video.url}
                thumbnail={content.video.thumbnail}
                autoplay={content.video.autoplay}
                inline={content.video.inline}
              />
            </div>
          </GridContainer>
        )}

        <GridContainer className="mt-20">
          {content.cards &&
            content.cards.map((item, index) => <Card key={index} {...item} />)}
        </GridContainer>
      </Container>
    </section>
  );
};

export default GeneralSection;
