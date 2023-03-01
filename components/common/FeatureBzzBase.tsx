import * as React from "react";

type FeatureBzzBaseProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureBzzBase: React.FC<FeatureBzzBaseProps> = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <div
      className="flex justify-center px-8 py-8 mt-8 text-center"
      style={{
        background: "linear-gradient(180deg, #F6F7F9 13.25%, #D6DBDF 100%)",
      }}
    >
      <div className="flex flex-col items-center">
        <span className="text-lg">{title}</span>
        <span className="text-orange-500 text-[32px] font-bold">
          {value} BZZ
        </span>
        <span>{description}</span>
        {icon}
      </div>
    </div>
  );
};

export default FeatureBzzBase;
