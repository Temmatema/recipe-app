import { FC } from "react";
import { IRecipe } from "../../types/recipes";
import Card from "./card/Card";
import styles from "./cards.module.scss";

interface CardListProps {
  items: IRecipe[];
}

const CardList: FC<CardListProps> = ({ items }) => {
  return (
    <div className={styles.wrap}>
      {items.map((item) => {
        return (
          <Card
            key={parseInt(item.idMeal)}
            id={item.idMeal}
            src={item.strMealThumb}
            title={item.strMeal}
          />
        );
      })}
    </div>
  );
};

export default CardList;
