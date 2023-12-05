import * as React from "react";
import {
  ButtonGroup,
  CardList,
  Container,
  FeatureList,
  Header,
  HeadingUnderline,
  SectionContent,
} from "@/components/common";
import { CtaType, FeatureListType, ImageType } from "types";
import { cx } from "utils";
import CodeBlock from "./Develop/CodeBlock";
import GridContainer from "../common/GridContainer";

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
    <Container className="relative z-10 w-full text-[#F6F7F9]">
      <GridContainer>
        <Header
          title={title}
          content={content}
          ctas={ctas}
          className="col-span-5"
        />
        <div
          className={cx(contentWidth === "half" ? "w-full" : "w-full md:w-1/2")}
        >
          {/* <HeadingUnderline type="small" title={title} /> */}
        </div>
        {/*           
          <SectionContent
            className={cx(
              "mt-12",
              contentWidth === "half" ? "" : "md:columns-2 max-w-none md:gap-16"
            )}
            fullWidth={contentWidth === "full"}
            content={content}
          /> */}
        {/* Full width image */}
        {image && image.length > 0 && (
          <div className="relative col-span-12 mt-16 -mx-4">
            <img
              className="border shadow border-gray-275"
              src={image}
              alt=""
              loading="lazy"
            />
          </div>
        )}
        <CodeBlock code={code} className="col-span-6 col-start-7" />
      </GridContainer>
      {/* @ts-ignore */}
      <CardList className="col-span-12 mt-16 mb-2" items={features?.features} />
    </Container>
  );
};

export default ContentContainer;
