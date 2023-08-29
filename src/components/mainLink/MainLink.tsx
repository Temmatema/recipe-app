import { useNavigate } from "react-router-dom";
import { FC } from "react";
import styles from './mainlink.module.scss'
import {motion} from 'framer-motion'

export const MainLink:FC = () => {
  const navigate = useNavigate()

  return (
    <motion.a 
    tabIndex={0}
    onKeyDown={(e) => {if(e.key === 'Enter') navigate('/home')}}
    transition={{ duration: 0.2 }}
    whileHover={{backgroundColor: '#fff', color: '#FE724C'}}
    whileFocus={{backgroundColor: '#fff', color: '#FE724C'}}
    className={styles.link} onClick={() => navigate('/home')}>
      Test the project
    </motion.a>
  );
};
