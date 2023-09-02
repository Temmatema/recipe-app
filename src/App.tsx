import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Favorites from './pages/favorites/Favorites'
import Recipe from './pages/Recipe/Recipe'
import Error from './pages/Error/Error'
import { Context } from './context/Context'
import Introduce from './pages/Introduce/Introduce'
import { useState } from 'react'

function App() {
  const [bar, setBar] = useState('home')
  
  return (
    <Context.Provider value={{
      bar, setBar
    }}>
        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/home' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </Context.Provider>
  )
}

export default App
