import { CtaType } from "types";
import { ButtonGroup, SectionContent, Tagline } from "../common";
import { cx } from "utils";

type HeaderProps = {
  tagline?: string;
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
  size?: "small" | "large";
};

export function Header({
  tagline,
  title,
  content,
  ctas,
  size = "small",
}: HeaderProps) {
  return (
    <div className={cx("max-w-[50%]")}>
      {tagline && <Tagline copy={tagline} />}

      <h2
        className={cx(
          "inline-flex flex-wrap font-bold  gap-3 items-center",
          {
            small: "md:text-4xl tracking-[-0.48px] mb-4",
            large:
              "text-4xl md:text-[88px] md:leading-[97px] mb-6 tracking-[-0.88px]",
          }[size]
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <SectionContent
        className={cx(
          "z-20 text-gray-100",
          {
            small: "md:text-[17px] md:leading-[24px] mb-6",
            large: "text-sm md:text-[19px] md:leading-[26px] mb-10",
          }[size]
        )}
        content={content}
      />

      {ctas && ctas.length > 0 && <ButtonGroup ctas={ctas} className="mb-4" />}
    </div>
  );
}
