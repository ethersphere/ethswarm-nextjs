import Image from "next/image";
import { Button, ButtonGroup, RegularLink } from "../common";
import { useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cx } from "utils";

type EventPopupType = {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  content?: string;
  href: string;
};

const EventPopup = ({ image, title, content, href }: EventPopupType) => {
  const [expanded, setExpanded] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 300) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  });

  return (
    <RegularLink
      href={href}
      onMouseEnter={() => setExpanded(true)}
      className={cx(
        "fixed bottom-10 justify-end bg-[#F6F7F9] backdrop-blur-xl bg-opacity-80 left-6 right-6  transition-all duration-300  md:left-auto border border-opacity-20 border-[#D6DBDF] rounded-xl overflow-hidden p-1 md:right-8  z-40 flex group",
        expanded ? "max-w-lg" : "max-w-[154px]"
      )}
    >
      <div
        className={cx(
          " px-4 py-5 text-[#141516] transition-all max-w-xs md:flex-shrink-0 "
        )}
      >
        <h4 className=" text-[17px] leading-6">
          {"Next event: "}
          <b>{title}</b>
        </h4>
        {content && <p className="mt-2">{content}</p>}
        <button className="text-sm text-[#141516] transition font-semibold leading-8 group-hover:text-opacity-80 mt-2">
          {"Read more ->"}
        </button>
      </div>
      <Image
        src={image ? image.src : "/assets/event.png"}
        width={288}
        height={288}
        alt={image ? image.alt : "Default event picture"}
        className="flex-shrink-0 h-36 w-36"
      />
    </RegularLink>
  );
};

export default EventPopup;
