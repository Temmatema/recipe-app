import { FC } from 'react'
import styles from '../../cards.module.scss'

interface CardCategoryProps {
  category: string
}

const CardCategory: FC<CardCategoryProps> = ({ category }) => {
  return (
    <div className={styles.card__category}>
      <img src={`img/${category}.png`} alt={category} />
    </div>
  )
}

export default CardCategory
