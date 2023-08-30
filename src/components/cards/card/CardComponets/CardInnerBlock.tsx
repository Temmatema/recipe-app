import { FC } from "react";
import styles from '../../cards.module.scss'
import { PiBowlFoodBold } from "react-icons/pi";
import CardCategory from "./СardCategory";

interface CardInnerBlockProps {
  title: string;
  country: string;
  category: string;
}

const CardInnerBlock:FC<CardInnerBlockProps> = ({title, country, category}) => {
  return (
    <div className={styles.card__inner}>
        <div className="flex justify-between items-start gap-4">
          <p className={styles.text}>{title}</p>
          <CardCategory category={category}/>
        </div>
        <div className={styles.card__country}>
          <PiBowlFoodBold />
          <p>{country}</p>
        </div>
      </div>
  );
};

export default CardInnerBlock