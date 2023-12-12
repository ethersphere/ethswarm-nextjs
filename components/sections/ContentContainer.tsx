import * as React from "react";
import {
  ButtonGroup,
  CardList,
  Container,
  ContentBlock,
  FeatureList,
  Header,
  HeadingUnderline,
  SectionContent,
  FeatureBzzPrice,
  FeatureBzzPot,
  FeatureExchanges,
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
  blocks?: any;
  features?: FeatureListType;
};

const ContentContainer: React.FC<ContentContainerProps> = ({
  title,
  content,
  ctas,
  code,
  blocks,
  contentWidth = "full",
  features,
  image,
}) => {
  return (
    <Container className="relative z-10  w-full text-[#F6F7F9]">
      <GridContainer className={cx(code && "items-center")}>
        <Header
          title={title}
          content={code ? content : undefined}
          ctas={ctas}
          className="col-span-12 md:col-span-5"
        />
        {!code && content && content.length > 0 && (
          <div
            className={cx(
              contentWidth === "half"
                ? "w-full"
                : " md:col-start-7 col-span-12 md:col-span-6"
            )}
          >
            <SectionContent
              fullWidth={contentWidth === "full"}
              content={content}
            />
          </div>
        )}
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

        {blocks && (
          <>
            {blocks.features.length > 0 &&
              blocks.features.map((block: any, i: any) => (
                <ContentBlock
                  key={i}
                  {...block}
                  className={cx(
                    "col-span-12 md:col-span-6 ",
                    title && !content ? "mt-10 md:mt-20" : "md:mt-24"
                  )}
                />
              ))}

            {blocks.bzzPrice && (
              <FeatureBzzPrice className="row-start-4 mt-5 md:mt-10 " />
            )}
            {blocks.bzzPot && (
              <FeatureBzzPot className="mt-5 md:mt-10 md:col-start-7" />
            )}
            {blocks.exchanges && <FeatureExchanges />}
          </>
        )}

        {/* Code block */}
        <CodeBlock
          code={code}
          className="col-span-12 md:col-span-6 md:col-start-7"
        />
      </GridContainer>
      {features && (
        <CardList
          className="col-span-12 mb-2 mt-28"
          items={features.features.map((item) => ({
            ...item,
            ctas: item.cta ? [item.cta] : [],
          }))}
        />
      )}
    </Container>
  );
};

export default ContentContainer;
