import { cx } from "utils";
import SectionContent from "./SectionContent";

type ContentBlockProps = {
  className?: string;
  title: string;
  content: string;
  children?: React.ReactNode;
};

const ContentBlock = ({
  title,
  content,
  className,
  children,
}: ContentBlockProps) => {
  return (
    <div className={cx(className, "md:pr-5")}>
      <h3 className="text-3xl font-semibold leading-[1.2]">{title}</h3>
      <SectionContent className={cx("mt-5 text-[17px]")} content={content} />
      {children}
    </div>
  );
};

export default ContentBlock;
