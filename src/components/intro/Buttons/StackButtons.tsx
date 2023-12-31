import { FC } from 'react'
import styles from '../intro.module.scss'
import { motion } from 'framer-motion'

const logos = [
  {
    name: 'TanStack',
    url: 'https://tanstack.com/',
    imgSrc: 'img/query-logo.png',
  },
  {
    name: 'Router',
    url: 'https://reactrouter.com/en/main',
    imgSrc: 'img/router-logo.png',
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/',
    imgSrc: 'img/redux-logo.png',
  },
  {
    name: 'Vite',
    url: 'https://vitejs.dev/',
    imgSrc: 'img/vite-logo.png',
  },
  {
    name: 'React',
    url: 'https://react.dev/',
    imgSrc: 'img/react-logo.png',
  },
  {
    name: 'Typescript',
    url: 'https://www.typescriptlang.org/',
    imgSrc: 'img/ts-logo.png',
  },
  {
    name: 'Sass',
    url: 'https://sass-lang.com/',
    imgSrc: 'img/sass-logo.png',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    imgSrc: 'img/tailwind-logo.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Temmatema/recipe-app',
    imgSrc: 'img/github-logo.png',
  },
  {
    name: 'Framer Motion',
    url: 'https://www.framer.com/motion/',
    imgSrc: 'img/framer-logo.png',
  },
]

const StackButtons: FC = () => {
  const container = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const link = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div variants={container} className='flex justify-center gap-5'>
      {logos.map((logo, index) => (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          key={index}
          href={logo.url}
          className={styles.link}
          variants={link}
        >
          <img src={logo.imgSrc} width='50' height='50' alt={`${logo.name} Logo`} />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default StackButtons
