import * as React from "react";
import { cn } from "utils";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const GridContainer: React.FC<ContainerProps> = ({
  children = null,
  className = "",
}) => {
  return (
    <div className={cn("grid grid-cols-12 gap-5 px-6 lg:px-14", className)}>
      {children}
    </div>
  );
};

export default GridContainer;
