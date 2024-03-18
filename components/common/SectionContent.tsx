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
  const [tooltipX, setTooltipX] = useState<number | null>(null);
  const [tooltipY, setTooltipY] = useState<number | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

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

  useEffect(() => {
    if (!container.current) {
      return;
    }

    const tooltip = container.current.querySelector("[data-help]");
    const tooltipContent = tooltip?.querySelector(
      "[data-help-content]"
    )?.innerHTML;

    if (!tooltip || !tooltipContent) {
      return;
    }
    setTooltipContent(tooltipContent);

    function tooltipEnter(e: Event) {
      const mouseEvent = e as MouseEvent;

      if (!container.current) {
        return;
      }

      const tooltip = container.current.querySelector("[data-help]");

      if (!tooltip) {
        return;
      }

      setTooltipX(mouseEvent.offsetX);
      setTooltipY(mouseEvent.offsetY);

      setTooltipVisible(true);
    }

    function tooltipLeave() {
      setTooltipVisible(false);
    }

    tooltip.addEventListener("mouseenter", tooltipEnter);
    tooltip.addEventListener("mouseleave", tooltipLeave);

    return () => {
      tooltip.removeEventListener("mouseenter", tooltipEnter);
      tooltip.removeEventListener("mouseleave", tooltipLeave);
    };
  }, [md]);

  if (content.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {box && (
        <div className="px-5 py-8 mb-8 max-w-[22rem] rounded-xl border border-[#2D3843] bg-[#1F2831B2]">
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

      {tooltipX !== null && tooltipY !== null && (
        <AnimatePresence>
          {tooltipVisible && (
            <motion.div
              initial={{ opacity: 0, y: "-98%" }}
              animate={{ opacity: 1, y: "-100%" }}
              exit={{ opacity: 0, y: "-98%" }}
              dangerouslySetInnerHTML={{
                __html: tooltipContent,
              }}
              className="absolute z-20 rounded-[10px] bg-[#1F2831] border border-[#2D3843] px-5 py-6 text-xs w-[205px] box-content"
              style={{
                top: tooltipY - 32,
                left: tooltipX,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default SectionContent;
