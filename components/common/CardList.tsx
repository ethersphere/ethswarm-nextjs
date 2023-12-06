import * as React from "react";
import { CardType } from "types";
import Card from "./Card";
import GridContainer from "./GridContainer";

type CardListProps = {
  items: Array<CardType>;
  className?: string;
};

const CardList: React.FC<CardListProps> = ({ items = [], className }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <GridContainer className={className}>
      {items.slice(0, 3).map((item, index) => (
        <Card
          key={index}
          className=""
          title={item.title}
          icon={item.icon}
          image={item.image}
          content={item.content}
          ctas={item.ctas}
        />
      ))}
    </GridContainer>
  );
};

export default CardList;
