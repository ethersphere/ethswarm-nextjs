import { SectionContent } from "@/components/common";
import { cn } from "utils";

type FaqItemProps = {
  title: string;
  body: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ title, body }) => {
  return (
    <details className="group border border-[#2D3843] rounded-lg bg-[#1F2831]/70">
      <summary
        className={cn(
          "flex cursor-pointer items-center justify-between gap-4 px-5 py-4",
          "text-base font-semibold text-[#F6F7F9] list-none",
          "[&::-webkit-details-marker]:hidden"
        )}
      >
        <span>{title}</span>
        <svg
          className="h-5 w-5 shrink-0 text-[#8B909A] transition-transform duration-200 group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <div className="faq-answer px-5 pb-5 pt-1 text-[#8B909A]">
        <SectionContent content={body} fullWidth />
      </div>
    </details>
  );
};

export default FaqItem;
