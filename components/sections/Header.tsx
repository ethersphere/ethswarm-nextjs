import { CtaType } from "types";
import { ButtonGroup, SectionContent, Tagline } from "../common";
import { cx } from "utils";

type HeaderProps = {
  tagline?: string;
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
};

export function Header({ tagline, title, content, ctas }: HeaderProps) {
  return (
    <div className={cx("max-w-[50%]")}>
      {tagline && <Tagline copy={tagline} />}
      {/* Same height as the tagline, show if there is no tagline */}
      <div className="h-[60px] md:h-[76px]" />

      <div className="z-20 mb-8 md:mb-6 ">
        <h2
          className="inline-flex flex-wrap font-bold text-4xl md:text-[88px] md:leading-[97px] tracking-[-0.88px] gap-3 items-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <SectionContent className="z-20 text-gray-100 mb-14" content={content} />

      <ButtonGroup ctas={ctas} className="mb-4" />
    </div>
  );
}
