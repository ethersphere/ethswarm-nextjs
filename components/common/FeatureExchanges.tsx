import * as React from "react";
import { ArrowIcon } from "@/icons/components/index";
import Icons from "@/icons/components/index";
import { cx } from "utils";

type Props = {};

const items = [
  {
    label: "Uniswap (ETH)",
    url: "https://app.uniswap.org/#/swap?chain=ethereum&inputCurrency=ETH&outputCurrency=0x19062190B1925b5b6689D7073fDfC8c2976EF8Cb",
    icon: Icons.UniswapIcon,
  },
  {
    label: "SushiSwap (xDAI)",
    url: "https://www.sushi.com/swap?chainId=100&token0=NATIVE&token1=0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da",
    icon: Icons.SushiSwapIcon,
  },
  {
    label: "Honeyswap (xDAI)",
    url: "https://honeyswap.1hive.eth.limo/#/swap?chain=xdai&outputCurrency=0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da",
    icon: Icons.HoneyswapIcon,
  },
];

const FeatureExchanges: React.FC<Props> = () => {
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
            <IconTag className="flex-shrink-0 w-6 max-h-6" />

            <span className="mt-4">{label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default FeatureExchanges;
