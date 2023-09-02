import { Dispatch, FC, SetStateAction } from 'react'
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface BookmarkProps {
  bar: string
  setBar: Dispatch<SetStateAction<string>>
}

const Bookmark: FC<BookmarkProps> = ({ bar, setBar }) => {
  const navigate = useNavigate()

  const bookmarkHandle = () => {
    setBar('bookmark')
    navigate('/favorites')
  }

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.15 }}
      onClick={bookmarkHandle}
    >
      {bar === 'bookmark' ? (
        <BsBookmarksFill className='w-6 h-6 text-white' />
      ) : (
        <BsBookmarks className='w-6 h-6 text-white' />
      )}
    </motion.button>
  )
}

export default Bookmark
