import { FC, useContext } from 'react'
import styles from './sidebar.module.scss'
import GithubLink from './sidebarComponents/GithubLink'
import Bookmark from './sidebarComponents/Bookmark'
import { RiHomeFill, RiHomeLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'

const Sidebar: FC = () => {
  const navigate = useNavigate()
  const {bar, setBar} = useContext(Context)

  const homeHandle = () => {
    navigate('/home')
    setBar('home')
  }

  return (
    <div className={styles.sidebar}>
      <GithubLink />
      <motion.button
        onClick={homeHandle}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.15 }}
      >
        {bar === 'home' ? <RiHomeFill className='w-7 h-7 text-white' /> : <RiHomeLine className='w-7 h-7 text-white' />}
      </motion.button>
      <Bookmark bar={bar} setBar={setBar} />
    </div>
  )
}

export default Sidebar
