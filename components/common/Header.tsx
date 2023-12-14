import { CtaType } from "types";
import { ButtonGroup, SectionContent, Tagline } from ".";
import { cx } from "utils";

type HeaderProps = {
  tagline?: string;
  title: string;
  content?: string;
  ctas?: Array<CtaType>;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  tagline,
  title,
  content,
  ctas,
  size = "medium",
  className = "",
}: HeaderProps) => {
  return (
    <div className={cx("text-gray-100", className)}>
      {tagline && <Tagline copy={tagline} />}

      <h2
        className={cx(
          "inline-flex flex-wrap font-bold gap-3 items-center",
          {
            small: " text-3xl md:text-3xl ",
            medium:
              " text-[44px] leading-[49px] md:text-5xl md:leading-[1.2] tracking-[-0.48px] ",
            large:
              "text-[56px] leading-[64px] md:text-[88px] md:leading-[97px] tracking-[-0.88px]",
          }[size]
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {content && (
        <SectionContent
          className={cx(
            "z-20 ",
            {
              small: "md:text-[17px] md:leading-[24px] mt-4 md:mr-8",
              medium: "md:text-[17px] md:leading-[24px] mt-4 md:mr-8",
              large:
                "text-base md:text-[19px] md:leading-[26px] mt-8 md:mt-6 md:mr-[72px]",
            }[size]
          )}
          content={content}
        />
      )}

      {ctas && ctas.length > 0 && (
        <ButtonGroup
          ctas={ctas}
          className={cx(
            {
              small: "mt-4",
              medium: "mt-6",
              large: " mt-8",
            }[size]
          )}
        />
      )}
    </div>
  );
};

export default Header;
