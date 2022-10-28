import * as React from "react";
import { cx } from "utils";

type QuoteProps = {
  quote?: string;
  className?: string;
};

const Quote: React.FC<QuoteProps> = ({ quote, className }) => {
  if (!quote || quote.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "flex items-center justify-center w-full px-6 py-3 font-semibold tracking-wider text-center text-gray-100 bg-gray-500 sm:text-lg sm:px-8 sm:py-4 font-display z-10 bg-opacity-70",
        className
      )}
    >
      {quote}
    </div>
  );
};

export default Quote;
