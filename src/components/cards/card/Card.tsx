import { FC } from "react"
import {motion} from 'framer-motion'
import styles from '../cards.module.scss'
import { useNavigate } from "react-router-dom"

interface CardProps {
  id: string;
  src: string;
  title: string;
}

const Card:FC<CardProps> = ({id, src, title}) => {
  const navigate = useNavigate()

  const card = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.a
    onClick={() => navigate(`/recipe/${id}`)}
    variants={card}
    initial='hidden'
    animate='visible'
    whileHover={{scale: 1.1}} 
    transition={{duration: 0.3}}
    className={styles.card}>
      <img className={styles.image} src={src} alt="Картинка" />
      <p className={styles.text}>{title}</p>
    </motion.a>
  )
}

export default Card