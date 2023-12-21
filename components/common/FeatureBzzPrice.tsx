import * as React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const FeatureBzzPrice: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.swarmscan.io/v1/postage-stamps/stats")
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.pricePerGBPerMonth.toFixed(4));
      });
  }, []);

  return (
    <Card
      title="Current storage price"
      value={`${price}  BZZ`}
      content="for 1 GByte for 1 month"
      icon="PriceIcon"
      className={className}
    />
  );
};

export default FeatureBzzPrice;
