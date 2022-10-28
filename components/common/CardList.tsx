import * as React from "react";
import { CardType } from "types";
import Card from "./Card";

type CardListProps = {
  items: Array<CardType>;
};

const CardList: React.FC<CardListProps> = ({ items = [] }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-12 mt-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:mt-8">
      {items.slice(0, 3).map((item, index) => (
        <Card
          key={index}
          className={index === 0 ? "sm:col-span-2" : ""}
          type={index === 0 ? "large" : "regular"}
          title={item.title}
          category={item.category}
          readTime={item.readTime}
          href={item.href}
          image={item.image}
          copy={item.copy}
          cta={item.cta}
        />
      ))}
    </div>
  );
};

export default CardList;
