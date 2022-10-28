import * as React from "react";
import {
  ButtonGroup,
  Container,
  FeatureList,
  HeadingUnderline,
  SectionContent,
} from "@/components/common";
import { CtaType, FeatureListType, ImageType } from "types";
import { cx } from "utils";
import CodeBlock from "./Develop/CodeBlock";

type ContentContainerProps = {
  title: string;
  content: string;
  contentWidth?: "full" | "half";
  ctas?: Array<CtaType>;
  image?: string;
  code?: string;
  features?: FeatureListType;
};

const ContentContainer: React.FC<ContentContainerProps> = ({
  title,
  content,
  ctas,
  code,
  contentWidth = "full",
  features,
  image,
}) => {
  return (
    <Container className="relative z-10 w-full">
      <div
        className={cx(
          "grid",
          contentWidth === "half"
            ? "grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            : "grid-cols-1"
        )}
      >
        <div>
          <div
            className={cx(
              contentWidth === "half" ? "w-full" : "w-full md:w-1/2"
            )}
          >
            <HeadingUnderline type="small" title={title} />
          </div>
          <SectionContent
            className={cx(
              "mt-12",
              contentWidth === "half" ? "" : "md:columns-2 max-w-none md:gap-16"
            )}
            fullWidth={contentWidth === "full"}
            content={content}
          />

          {/* Full width image */}
          {image && image.length > 0 && (
            <div className="relative mt-16 -mx-4">
              <img
                className="border shadow border-gray-275"
                src={image}
                alt=""
                loading="lazy"
              />
            </div>
          )}

          {/* @ts-ignore */}
          <FeatureList className="mt-16 mb-2" {...features} />

          <ButtonGroup className="mt-16" ctas={ctas} />
        </div>

        <CodeBlock code={code} />
      </div>
    </Container>
  );
};

export default ContentContainer;
