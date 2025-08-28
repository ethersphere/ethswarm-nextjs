import * as React from "react";
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
    label: "CoW Swap (xDAI)",
    url: "https://swap.cow.fi/#/1/swap/WETH/BZZ",
    icon: Icons.CowSwapIcon,
  },
  {
    label: "Jumper (any)",
    url: "https://jumper.exchange/exchange?fromChain=1&fromToken=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&toChain=100&toToken=0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da",
    icon: Icons.JumperIcon,
  },
];

const FeatureExchanges: React.FC<Props> = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mt-10 mb-10 xl:grid-cols-3">
        {items.map(({ label, url, icon }, index) => {
          const IconTag: any = icon ?? false;
          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={cx(
                "flex flex-col text-center items-center border border-[#2D3843] rounded-xl overflow-hidden bg-[#1F2831]/70 px-2 py-5 text-sm sm:text-base font-bold group hover:bg-[#1F2831]/40 duration-200"
              )}
            >
              <IconTag className="shrink-0 w-6 max-h-6" />

              <span className="mt-4">{label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureExchanges;
