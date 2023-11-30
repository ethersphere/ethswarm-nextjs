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
    <div className={cx("text-sm font-semibold  pb-2 md:pb-4", className)}>
      {copy}
    </div>
  );
};

export default Tagline;
