import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchCurrent } from '../../hooks/useFetchCurrent'
import Loader from '../../components/loader/Loader'
import CurrentRecipe from '../../components/currentRecipe/current.recipe'

const Recipe: FC = () => {
  const { id } = useParams()

  const { data, isLoading } = useFetchCurrent(id || '')

  return (
  <div className='p-8'>
    {
      isLoading ? <Loader /> : (data && <CurrentRecipe {...data.meals[0]}/>)
    }
    </div>
  )
}

export default Recipe
