import Image from "next/image";
import { RegularLink } from "../common";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cx } from "utils";

type EventPopupType = {
  image: {
    src: string;
    alt: string;
  };
  cta: {
    href: string;
    title: string;
  };
  title: string;
  content?: string;
};

const EventPopup = ({ image, title, content, cta }: EventPopupType) => {
  const [expanded, setExpanded] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 300) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  });

  if (!title) {
    return null;
  }

  return (
    <RegularLink
      href={cta.href}
      onMouseEnter={() => setExpanded(true)}
      className={cx(
        "relative mt-20 md:my-0 mx-6 md:fixed bottom-10 justify-between md:justify-end bg-[#F6F7F9] backdrop-blur-xl bg-opacity-80 left-0 right-0 transition-all duration-300 md:left-auto border border-opacity-20 border-[#D6DBDF] rounded-xl overflow-hidden p-1 md:right-8 z-40 flex group",
        expanded ? "max-w-lg" : "md:max-w-[154px]"
      )}
    >
      <div
        className={cx(
          "px-4 pt-5 pb-3 mr-3 md:pr-8 text-[#141516] transition-all max-w-[22rem] md:flex-shrink-0"
        )}
      >
        <h4 className="text-[17px] leading-6">
          {"Next event: "}
          <b>{title}</b>
        </h4>
        {content && (
          <p className="hidden mt-2 text-sm md:block line-clamp-2">{content}</p>
        )}
        <button className="text-sm text-[#141516] transition font-semibold leading-8 group-hover:text-opacity-80 mt-2">
          {cta.title}
        </button>
      </div>

      {image && image.src && (
        <Image
          src={image.src}
          width={288}
          height={288}
          alt={image.alt ?? ""}
          className="flex-shrink-0 h-36 w-36 rounded-[9px]"
        />
      )}
    </RegularLink>
  );
};

export default EventPopup;
