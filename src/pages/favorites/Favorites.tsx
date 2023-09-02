import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import CardList from '../../components/cards/CardList'
import Sidebar from '../../components/sidebar/Sidebar'

const Favorites: FC = () => {
  const store = useSelector((state: RootState) => state.favorite)

  return (
    <div className='flex p-8 gap-10 h-full w-full items-start'>
      <Sidebar />
      <CardList items={store} />
    </div>
  )
}

export default Favorites
