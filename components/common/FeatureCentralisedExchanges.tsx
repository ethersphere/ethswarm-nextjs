import * as React from "react";
import * as Icons from "@/icons/components/index";
import { cx } from "utils";

type Props = {};

const items = [
  {
    label: "CoinMarketCap",
    url: "https://coinmarketcap.com/currencies/ethereum-swarm/markets/",
    icon: Icons.CoinMarketCapIcon,
  },
  {
    label: "CoinGecko",
    url: "https://www.coingecko.com/en/coins/swarm#markets",
    icon: Icons.CoinGeckoIcon,
  },
  {
    label: "Messari",
    url: "https://messari.io/project/swarm",
    icon: Icons.MessariIcon,
  },
];

const FeatureCentralisedExchanges: React.FC<Props> = () => {
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
              "flex flex-col text-center items-center border border-[#2D3843] rounded-xl overflow-hidden bg-[#1F2831]/70 px-2 py-5 text-sm sm:text-base hover:bg-[#1F2831]/40 font-bold duration-200 group"
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

export default FeatureCentralisedExchanges;
