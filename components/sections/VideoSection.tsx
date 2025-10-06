import * as React from "react";
import { Container, Header, Video } from "@/components/common";
import cx from "../../utils/cx";
import GridContainer from "../common/GridContainer";

type VideoSectionProps = {
  textColor?: "text-black" | "text-gray-100";
  className?: string;
  content: {
    tagline?: string;
    title: string;
    content?: string;
    video: {
      url: string;
      thumbnail?: string;
      autoplay?: boolean;
      inline?: boolean;
    };
  };
};

const VideoSection: React.FC<VideoSectionProps> = ({
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
      <Container className="flex flex-col pt-40 md:pt-48">
        <GridContainer>
          <Header
            title={content.title}
            tagline={content.tagline}
            size="medium"
            className="col-span-12 lg:col-span-6"
          />
        </GridContainer>

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
      </Container>
    </section>
  );
};

export default VideoSection;
