import * as React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const FeatureBzzPot: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [pot, setPot] = useState(0);

  useEffect(() => {
    fetch("https://api.swarmscan.io/v1/redistribution/stats")
      .then((response) => response.json())
      .then((data) => {
        setPot(data.latestReward.amount.toFixed(4));
      });
  }, []);

  return (
    <Card
      title="Current redistribution pot"
      value={`${pot} BZZ`}
      content="rewarded approximately every 15 minutes to a chosen node"
      icon="RewardIcon"
      className={className}
    />
  );
};

export default FeatureBzzPot;
