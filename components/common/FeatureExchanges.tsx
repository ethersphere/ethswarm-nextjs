import * as React from "react";
import { ArrowIcon } from "@/icons/components/index";
import Icons from "@/icons/components/index";

type Props = {};

const items = [
  {
    label: "Bzzaar",
    url: "https://bzz.exchange",
    icon: Icons.BzzarIcon,
  },
  {
    label: "OpenBZZ",
    url: "https://openbzz.eth.limo/",
    icon: Icons.OpenbzzIcon,
  },
  {
    label: "HoneySwap",
    url: "https://honeyswap.1hive.eth.limo/#/swap?chain=xdai&outputCurrency=0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da",
    icon: Icons.HoneyswapIcon,
  },
  {
    label: "Uniswap",
    url: "https://app.uniswap.org/#/swap?chain=ethereum&outputCurrency=0x19062190B1925b5b6689D7073fDfC8c2976EF8Cb",
    icon: Icons.UniswapIcon,
  },
  {
    label: "Pancakeswap",
    url: "https://pancakeswap.finance/swap?outputCurrency=0x076b6AE0Fd55aBcD013d6B2295bF1B3Dcdb1006f",
    icon: Icons.PancakeswapIcon,
  },
];

const FeatureExchanges: React.FC<Props> = () => {
  return (
    <ul className="border border-black divide-y divide-black">
      {items.map(({ label, url, icon }, index) => {
        const IconTag: any = icon ?? false;
        return (
          <li className="block text-lg font-bold" key={index}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-4 py-3 space-x-4"
            >
              <IconTag className="w-6 max-h-6" />
              <span className="flex items-center justify-between grow">
                <span className="">{label}</span>
                <ArrowIcon className="w-4 h-4 text-black" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FeatureExchanges;
