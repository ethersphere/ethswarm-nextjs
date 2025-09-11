import { InfoIcon } from "@/icons/components";
import { cp } from "fs";
import markdownToHtml from "lib/markdownToHtml";
import { useEffect, useRef, useState } from "react";
import { cx } from "utils";
import { AnimatePresence, motion } from "framer-motion";
import { CtaType } from "types";
import ButtonGroup from "./ButtonGroup";

type SectionContentProps = {
  content?: string;
  className?: string;
  fullWidth?: boolean;
  ctas?: Array<CtaType>;
  markdown?: boolean;
  box?: {
    title: string;
    content: string;
  };
};

const SectionContent: React.FC<SectionContentProps> = ({
  content = "",
  className = "",
  fullWidth = false,
  markdown = true,
  ctas = [],
  box = undefined,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const [md, setMd] = useState(content);
  const [boxContent, setBoxContent] = useState<string>(box?.content || "");

  useEffect(() => {
    if (!markdown) {
      setMd(content);
      return;
    }

    markdownToHtml(content).then((html) => {
      setMd(html);
    });
  }, [content, markdown]);

  useEffect(() => {
    if (!box || !box.content) {
      return;
    }

    markdownToHtml(box.content).then((html) => {
      setBoxContent(html);
    });
  }, [box]);

  if (content.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {box && (
        <div className="px-5 py-8 mb-8 max-w-88 rounded-xl border border-[#2D3843] bg-[#1F2831B2]">
          {box.title && (
            <h3 className="font-bold text-[#FF6B26] text-3xl">{box.title}</h3>
          )}
          {box.content && (
            <div
              className={cx("text-sm", box.title ? "mt-4" : "")}
              dangerouslySetInnerHTML={{
                __html: boxContent,
              }}
            />
          )}
        </div>
      )}

      <div
        ref={container}
        className={cx(
          "prose prose-sm leading-[20px] md:leading-[26px] md:prose-lg",
          className,
          fullWidth ? "w-full max-w-none" : "max-w-xl"
        )}
        dangerouslySetInnerHTML={{
          __html: md,
        }}
      />

      {ctas && ctas.length > 0 && (
        <ButtonGroup ctas={ctas} className="mt-6 md:mt-10" />
      )}

    </div>
  );
};

export default SectionContent;
