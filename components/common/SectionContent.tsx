import { InfoIcon } from "@/icons/components";
import { cp } from "fs";
import markdownToHtml from "lib/markdownToHtml";
import { useEffect, useRef, useState } from "react";
import { cx } from "utils";
import { AnimatePresence, motion } from "framer-motion";

type SectionContentProps = {
  content?: string;
  className?: string;
  fullWidth?: boolean;
  markdown?: boolean;
  tooltip?: string;
};

const SectionContent: React.FC<SectionContentProps> = ({
  content = "",
  className = "",
  fullWidth = false,
  markdown = true,
  tooltip = "",
}) => {
  const [md, setMd] = useState(content);
  const container = useRef<HTMLDivElement>(null);
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

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
    if (container.current) {
      const tooltip = container.current.querySelector("em");
      if (tooltip) {
        // add space for tooltip icon and add cursor, add event listners so tooltip appears on hover
        tooltip.classList.add("mr-5");
        tooltip.classList.add("cursor-[help]");
        setTooltipRect(tooltip.getBoundingClientRect());
        tooltip.addEventListener("mouseenter", () => {
          setTooltipVisible(true);
        });
        tooltip.addEventListener("mouseleave", () => {
          setTooltipVisible(false);
        });
      }
    }
  }, [container.current]);

  if (content.length === 0) {
    return null;
  }

  return (
    <>
      <div
        ref={container}
        className={cx(
          "relative prose prose-sm leading-[20px] md:leading-[26px] md:prose-lg  ",
          className,
          fullWidth ? "w-full max-w-none" : "max-w-xl"
        )}
        dangerouslySetInnerHTML={{
          __html: md,
        }}
      />
      {tooltipRect && (
        <>
          <InfoIcon
            onMouseEnter={() => {
              setTooltipVisible(true);
            }}
            onMouseLeave={() => {
              setTooltipVisible(false);
            }}
            className="absolute z-10 w-4 h-4 text-gray-400"
            style={{
              top: tooltipRect.top,
              left: tooltipRect.left + tooltipRect.width + 2,
            }}
          />
          <AnimatePresence>
            {tooltipVisible && (
              <motion.div
                initial={{ opacity: 0, y: "-98%" }}
                animate={{ opacity: 1, y: "-100%" }}
                exit={{ opacity: 0, y: "-98%" }}
                dangerouslySetInnerHTML={{
                  __html: tooltip,
                }}
                className="absolute z-20 rounded-[10px] bg-[#1F2831] max-[500px]:!left-0 right-5 min-[500px]:right-auto ml-auto border border-[#2D3843] px-5 py-6 text-xs w-[205px] box-content"
                style={{
                  top: tooltipRect.top - 4,
                  left: tooltipRect.left + tooltipRect.width + 2,
                }}
              ></motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default SectionContent;
