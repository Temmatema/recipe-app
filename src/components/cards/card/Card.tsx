import { FC, useState } from "react";
import { motion } from "framer-motion";
import styles from "../cards.module.scss";
import { RecipeProps } from "../../../types/recipes";
import Tags from "./CardComponets/Tags";
import CardImage from "./CardComponets/CardImage";
import CardInnerBlock from "./CardComponets/CardInnerBlock";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card: FC<RecipeProps> = ({ id, src, title, country, tags, category }) => {
  const [isLiked, setIsLiked] = useState(false);

  const card = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={card}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
      className={styles.card}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.card__favorite}
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </motion.button>
      <Tags tags={tags} />
      <CardImage id={id} src={src} />
      <CardInnerBlock category={category} country={country} title={title} />
    </motion.div>
  );
};

export default Card;
