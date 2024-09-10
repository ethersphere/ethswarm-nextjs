import * as React from "react";
import Icons from "@/icons/components/index";
import {
  CowSwapWidget,
  // CowSwapWidgetParams,
  // TradeType,
} from "@cowprotocol/widget-react";

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

const params = {
  appCode: "My Cool App", // Name of your app (max 50 characters)
  width: "100%", // Width in pixels (or 100% to use all available space)
  height: "640px",
  chainId: 1, // 1 (Mainnet), 100 (Gnosis), 11155111 (Sepolia)
  tokenLists: [
    // All default enabled token lists. Also see https://tokenlists.org
    "https://files.cow.fi/tokens/CoinGecko.json",
    "https://files.cow.fi/tokens/CowSwap.json",
  ],
  // Types not working, comment out to disable
  // tradeType: TradeType.SWAP, // TradeType.SWAP, TradeType.LIMIT or TradeType.ADVANCED
  sell: {
    // Sell token. Optionally add amount for sell orders
    asset: "usdt",
    amount: "500",
  },
  buy: {
    asset: "bzz",
    amount: "0",
  },
  enabledTradeTypes: [
    // Types not working, comment out to disable
    // TradeType.SWAP, TradeType.LIMIT and/or TradeType.ADVANCED
    // TradeType.SWAP,
    // TradeType.LIMIT,
    // TradeType.ADVANCED,
  ],
  theme: {
    baseTheme: "dark",
    primary: "#e97e2f",
    paper: "#1b2129",
    text: "#f6f7f9",
  },
  standaloneMode: true,
  disableToastMessages: false,
  disableProgressBar: false,
  images: {},
  sounds: {},
  customTokens: [],
};

const FeatureSwap: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="border border-[#2D3843] rounded-xl overflow-hidden bg-[#1F2831]/70 pb-5">
        <CowSwapWidget params={params} />
        <div className="text-[13px] text-[#F6F7F9]/40 px-4 max-w-lg mx-auto">
          Please note that the quoting system in CowSwap is in beta and may not
          provide accurate predictions. To determine the exact final price, you
          can calculate it from the different pools (
          <a
            href="https://app.uniswap.org/explore/pools/ethereum/0x5696C2c2FcB7e304A5B9fAaEc9cd37d369C9D067"
            target="_blank"
            className="underline hover:text-[#F6F7F9]"
          >
            Ethereum
          </a>
          ,{" "}
          <a
            href="https://balancer.fi/pools/gnosis/cow/0x8Db38b15ccAbd9D7f62c77E22a57D979501404d9"
            target="_blank"
            className="underline hover:text-[#F6F7F9]"
          >
            GnosisChain
          </a>
          )
        </div>
      </div>
    </div>
  );
};

export default FeatureSwap;
