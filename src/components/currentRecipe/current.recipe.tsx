import { FC } from "react"
import { ICurrentRecipe } from "../../types/recipe.current"

const CurrentRecipe:FC<ICurrentRecipe> = (props) => {
  return (
    <>
      <h1>{props.strMeal}</h1>
    </>
  )
}

export default CurrentRecipe