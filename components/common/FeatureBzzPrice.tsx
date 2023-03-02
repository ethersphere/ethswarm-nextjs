import * as React from "react";
import Icons from "@/icons/components/index";
import { useEffect, useState } from "react";
import FeatureBzzBase from "./FeatureBzzBase";

const FeatureBzzPrice: React.FC = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.swarmscan.io/v1/postage-stamps/stats")
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.pricePerGBPerMonth.toFixed(4));
      });
  }, []);

  return (
    <FeatureBzzBase
      title="Current storage price"
      value={`${price}`}
      description="for 1 GByte for 1 month"
      icon={<Icons.WriteIcon className="h-12 mt-8" />}
    />
  );
};

export default FeatureBzzPrice;
