import { CtaType } from "types";
import { ButtonGroup, SectionContent, Tagline } from ".";
import { cx } from "utils";

type HeaderProps = {
  tagline?: string;
  title: string;
  id?: string;
  content?: string;
  ctas?: Array<CtaType>;
  size?: "small" | "medium" | "medium-large" | "large" | "dynamic";
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  tagline,
  title,
  id = "",
  content,
  ctas,
  size = "medium",
  className = "",
}: HeaderProps) => {
  return (
    <div className={cx("text-gray-100 scroll-m-6", className)} id={id}>
      {tagline && <Tagline copy={tagline} />}

      <h2
        className={cx(
          "inline-flex flex-wrap font-bold gap-3 items-center",
          {
            small: "text-3xl md:text-3xl",
            medium:
              "text-[44px] leading-[49px] md:text-5xl md:leading-[1.2] tracking-[-0.48px]",
            "medium-large":
              "text-[48px] leading-[49px] md:text-[64px] md:leading-[1.2] tracking-[-1%]",
            large:
              "text-[56px] leading-[64px] md:text-[88px] md:leading-[97px] tracking-[-0.88px]",
            dynamic:
              "text-[13vw] leading-[1.14] md:text-[88px] md:leading-[97px] tracking-[-0.88px]",
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
              "medium-large": "md:text-[17px] md:leading-[24px] mt-4 md:mr-8",
              large:
                "text-base md:text-[19px] md:leading-[26px] mt-8 md:mt-6 md:mr-[72px]",
              dynamic:
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
              "medium-large": "mt-8",
              large: " mt-8",
              dynamic: " mt-8",
            }[size]
          )}
        />
      )}
    </div>
  );
};

export default Header;
