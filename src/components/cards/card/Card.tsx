import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../cards.module.scss'
import Tags from './CardComponets/Tags'
import CardImage from './CardComponets/CardImage'
import CardInnerBlock from './CardComponets/CardInnerBlock'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../../store/favoriteSlice'
import { IRecipe } from '../../../types/recipes'
import { RootState } from '../../../store/store'

const Card: FC<IRecipe> = (props) => {
  const [isLiked, setIsLiked] = useState(false)
  const dispath = useDispatch()
  const isFavorite = useSelector((state: RootState) =>
  state.favorite.some((el) => el.idMeal === props.idMeal)
)
  const card = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const handleFavorite = () => {
    setIsLiked(!isLiked)
    dispath(toggleFavorite(props))
  }

  return (
    <motion.div
      variants={card}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.3 }}
      className={styles.card}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.card__favorite}
        onClick={handleFavorite}
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </motion.button>
      <Tags tags={props.strTags} />
      <CardImage id={props.idMeal} src={props.strMealThumb} />
      <CardInnerBlock {...props} />
    </motion.div>
  )
}

export default Card
