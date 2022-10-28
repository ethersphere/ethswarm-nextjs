import * as React from "react";
import { FeatureListType } from "types";
import { cx } from "utils";
import Feature from "./Feature";

type FeatureListProps = FeatureListType;

const FeatureList: React.FC<FeatureListProps> = ({
  features = [],
  className = "",
  columns = "four",
  spacing = "default",
  type = "default",
}) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "grid relative z-10",
        spacing === "default"
          ? type === "default"
            ? "gap-y-12 md:gap-y-[72px]"
            : "gap-y-16"
          : "",
        spacing === "wide"
          ? type === "default"
            ? "gap-y-16 md:gap-y-24"
            : "gap-y-20"
          : "",
        columns === "four"
          ? "grid-cols-1 -ml-2 md:grid-cols-4 sm:grid-cols-2 sm:-ml-4"
          : "",
        columns === "six"
          ? "-ml-2 grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 sm:-ml-4"
          : "",
        columns === "three"
          ? "-ml-2 grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 sm:-ml-4"
          : "",
        columns === "two"
          ? "-ml-2 grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 sm:-ml-4 sm:gap-x-14"
          : "",
        className
      )}
    >
      {features.map((feature, index) => (
        <Feature key={index} type={type} {...feature} />
      ))}
    </div>
  );
};

export default FeatureList;
