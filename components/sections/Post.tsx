import React from "react";
import { CtaType } from "types";
import { cx } from "utils";
import { ButtonGroup, Container, SectionContent } from "../common";

type PostProps = {
  border?: boolean;
  content: string;
  id?: string;
  sidebar?: {
    content?: string;
    ctas?: Array<CtaType>;
  };
};

const Post: React.FC<PostProps> = ({
  border = false,
  content,
  sidebar,
  id,
}) => {
  return (
    <section
      className="relative z-10 flex justify-center -mt-20 sm:-mt-40"
      id={id}
    >
      <Container
        className={cx(
          "grid w-full grid-cols-1 gap-16 pb-16 sm:-ml-4 md:grid-cols-3 md:pb-32 md:gap-0",
          border ? "border-b border-black mb-16 md:mb-32" : ""
        )}
      >
        <div className="max-w-xs space-y-4 sm:px-2 md:px-4 md:space-y-12">
          <SectionContent fullWidth={true} content={sidebar?.content} />
          <ButtonGroup ctas={sidebar?.ctas} />
        </div>

        <div
          className="-ml-2 prose-sm prose leading-[20px] md:leading-[26px] md:prose-lg md:col-span-2 sm:ml-0"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Container>
    </section>
  );
};

export default Post;
