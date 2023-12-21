import * as React from "react";
import { cn } from "utils";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  children = null,
  className = "",
}) => {
  return <div className={cn("max-w-6xl mx-auto", className)}>{children}</div>;
};

export default Container;
