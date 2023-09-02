import { FC } from 'react'
import Search from '../../components/search/Search'
import CardList from '../../components/cards/CardList'
import { useFetchRecipes } from '../../hooks/useFetchRecipes'
import Loader from '../../components/loader/Loader'
import Sidebar from '../../components/sidebar/Sidebar'

const Home: FC = () => {
  const { data, isLoading } = useFetchRecipes()
  return (
    <div className='flex p-8 gap-10 h-full w-full'>
      <Sidebar />
      <div>
        <Search />
        {isLoading ? <Loader /> : data && <CardList items={data.meals} />}
      </div>
    </div>
  )
}

export default Home
