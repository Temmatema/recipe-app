import { motion } from 'framer-motion'
import { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'

const GithubLink: FC = () => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target='_blank'
      href='https://github.com/Temmatema/recipe-app'
    >
      <AiFillGithub className='w-12 h-12 text-white' />
    </motion.a>
  )
}

export default GithubLink
