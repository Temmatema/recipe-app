import { FC } from 'react'
import styles from '../../cards.module.scss'
import { PiBowlFoodBold } from 'react-icons/pi'
import CardCategory from './СardCategory'
import { IRecipe } from '../../../../types/recipes'

const CardInnerBlock: FC<IRecipe> = (props) => {
  return (
    <div className={styles.card__inner}>
      <div className='flex justify-between items-start gap-4'>
        <p className={styles.text}>{props.strMeal}</p>
        <CardCategory category={props.strCategory} />
      </div>
      <div className={styles.card__country}>
        <PiBowlFoodBold />
        <p>{props.strArea}</p>
      </div>
    </div>
  )
}

export default CardInnerBlock
