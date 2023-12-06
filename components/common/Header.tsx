import { CtaType } from "types";
import { ButtonGroup, SectionContent, Tagline } from ".";
import { cx } from "utils";
import exp from "constants";

type HeaderProps = {
  tagline?: string;
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
  size?: "small" | "large";
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  tagline,
  title,
  content,
  ctas,
  size = "small",
  className = "",
}: HeaderProps) => {
  return (
    <div className={cx("", className)}>
      {tagline && <Tagline copy={tagline} />}

      <h2
        className={cx(
          "inline-flex flex-wrap font-bold  gap-3 items-center",
          {
            small: "md:text-5xl md:leading-[1.2] tracking-[-0.48px] mb-4",
            large:
              "text-4xl md:text-[88px] md:leading-[97px] mb-6 tracking-[-0.88px]",
          }[size]
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {content && (
        <SectionContent
          className={cx(
            "z-20 text-gray-100",
            {
              small: "md:text-[17px] md:leading-[24px] mb-6 mr-8",
              large: "text-sm md:text-[19px] md:leading-[26px] mb-10 mr-[72px]",
            }[size]
          )}
          content={content}
        />
      )}

      {ctas && ctas.length > 0 && <ButtonGroup ctas={ctas} className="" />}
    </div>
  );
};

export default Header;
