import * as React from "react";
import Icons from "@/icons/components/index";
import { cx } from "utils";

type Props = {};

const items = [
  {
    label: "Gnosis",
    url: "https://bridge.gnosischain.com/",
    icon: Icons.GnosisIcon,
  },
];

const FeatureBridges: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 xl:grid-cols-3">
      {items.map(({ label, url, icon }, index) => {
        const IconTag: any = icon ?? false;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={cx(
              "flex flex-col text-center items-center border border-[#2D3843] rounded-xl overflow-hidden bg-[#1F2831]/70 px-4 py-5 text-sm sm:text-[17px] font-bold duration-200 group"
            )}
          >
            <IconTag className="shrink-0 w-6 max-h-6" />

            <span className="mt-4">{label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default FeatureBridges;
