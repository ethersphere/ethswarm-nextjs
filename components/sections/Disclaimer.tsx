import React from "react";
import { cx } from "utils";

type DisclaimerProps = {
  index?: number;
  hero?: any; // Hero type?
  items?: any;
};

const Disclaimer: React.FC<DisclaimerProps> = ({ index, hero, items = [] }) => {
  return (
    <div className="relative z-10 w-full h-full max-w-6xl px-6 mx-auto mt-32 xl:px-4 2xl:max-w-7xl">
      <h2 className="text-2xl font-bold text-gray-500">Disclaimer</h2>
      <div className="mt-8 text-base italic md:text-lg">
        <p>
          BZZ utility token should not be purchased for financial gain or
          speculation. There are risks related with holding and using BZZ token
          and other cryptocurrency, staking and participating in the network as
          a node operator. The node may not receive any reward at all, amounts
          staked may be unexpectedly slashed, uploaded data may become
          unavailable or corrupt, temporarily or permanently lost depending on
          the performance of the network during these phases. Only by
          participating actively in the network, its parameters can be tested
          and patched when needed. An external audit on the upgrades will be
          conducted in parallel with the estimated delivery date being March
          2023. All dates and information in this page is indicative and may
          change without prior warning. Follow us on discord and twitter for
          updates.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
