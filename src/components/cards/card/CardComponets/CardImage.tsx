import { FC, useState } from 'react'
import styles from '../../cards.module.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../loader/Loader'

interface CardImageProps {
  src: string
  id: string
}

const CardImage: FC<CardImageProps> = ({id, src}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.a
      onLoad={() => setImageLoaded(true)}
      onClick={() => navigate(`/recipe/${id}`)}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className='absolute w-full h-full flex -z-10 items-center justify-center'
    >
      {!imageLoaded && <Loader />}
      <img className={styles.card__image} src={src} alt='Картинка' />
    </motion.a>
  )
}

export default CardImage
