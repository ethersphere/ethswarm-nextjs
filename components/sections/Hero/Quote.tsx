import Link from "next/link";
import * as React from "react";
import { cx } from "utils";
import { ArrowIcon } from "@/icons/components/index";

type QuoteProps = {
  quote?: {
    title: string;
    href?: string;
    background_gradient?: boolean;
  };
  className?: string;
};

const Quote: React.FC<QuoteProps> = ({ quote, className }) => {
  if (!quote || quote.title.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "flex items-center justify-center w-full px-6 py-3 font-semibold tracking-wider text-center sm:text-lg sm:px-8 sm:py-4 font-display z-10",
        className,
        quote.background_gradient
          ? "bg-gradient-to-r from-[#FF7A00E5] to-[#B43BCDE5] text-gray-100"
          : "text-gray-100 bg-gray-500 bg-opacity-70"
      )}
    >
      {quote.href ? (
        <Link
          href={quote.href}
          className="flex items-center gap-3 transition duration-200 group focus:outline-none"
        >
          <span>{quote.title}</span>
          <div className="relative w-4 h-4">
            <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 group-hover:translate-x-4 group-hover:opacity-0" />
            <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </Link>
      ) : (
        <>{quote.title}</>
      )}
    </div>
  );
};

export default Quote;
