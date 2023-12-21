import * as React from "react";
import { LinkType } from "types";
import Link from "next/link";

type RegularLinkProps<LinkType> = LinkType & {
  className?: string;
  onClick?: () => void;
} & JSX.IntrinsicElements["a"];

export const RegularLink: React.FC<RegularLinkProps<LinkType>> = ({
  children,
  href,
  className,
  onClick,
  ...buttonProps
}) => {
  if (href.startsWith("http")) {
    return (
      <a
        onClick={onClick}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        {...buttonProps}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
};

export default RegularLink;
