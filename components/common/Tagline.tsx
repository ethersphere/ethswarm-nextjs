import * as React from "react";
import { cx } from "utils";

type TaglineProps = {
  copy?: string;
  className?: string;
};

const Tagline: React.FC<TaglineProps> = ({ copy = "", className = "" }) => {
  if (copy.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "font-display text-sm font-bold tracking-[0.03em] uppercase leading-5 pb-6 md:pb-10 pt-4",
        className
      )}
    >
      {copy}
    </div>
  );
};

export default Tagline;
