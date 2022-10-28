import * as React from "react";
import { cx } from "utils";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  children = null,
  className = "",
}) => {
  return (
    <div
      className={cx(
        "w-full h-full px-6 xl:px-4 max-w-6xl 2xl:max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
