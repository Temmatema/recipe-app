import { FC } from 'react'
import { IRecipe } from '../../types/recipes'
import Card from './card/Card'
import styles from './cards.module.scss'

interface CardListProps {
  items: IRecipe[]
}

const CardList: FC<CardListProps> = ({ items }) => {
  return (
    <div className={styles.wrap}>
      {items ? (
        items.map((item) => {
          return (
            <Card
              key={parseInt(item.idMeal)}
              idMeal={item.idMeal}
              strMealThumb={item.strMealThumb}
              strMeal={item.strMeal}
              strArea={item.strArea}
              strCategory={item.strCategory}
              strTags={item.strTags}
            />
          )
        })
      ) : (
        <h1>Nothing</h1>
      )}
    </div>
  )
}

export default CardList
