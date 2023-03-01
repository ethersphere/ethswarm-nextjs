import * as React from "react";
import Icons from "@/icons/components/index";
import { useEffect, useState } from "react";
import FeatureBzzBase from "./FeatureBzzBase";

const FeatureBzzPot: React.FC = () => {
  const [pot, setPot] = useState(0);

  useEffect(() => {
    fetch("https://api.swarmscan.io/v1/redistribution/stats")
      .then((response) => response.json())
      .then((data) => {
        setPot(data.latestReward.amount.toFixed(4));
      });
  }, []);

  return (
    <FeatureBzzBase
      title="Current redistribution pot"
      value={`${pot}`}
      description="rewarded approximately every 15 minutes to a chosen node"
      icon={<Icons.RewardIcon className="h-12 mt-8" />}
    />
  );
};

export default FeatureBzzPot;
