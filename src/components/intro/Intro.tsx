import { FC } from "react";
import styles from "./intro.module.scss";
import StackButtons from "./Buttons/StackButtons";
import { motion } from "framer-motion";

const Intro: FC = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 1 }}
      className="pt-20"
    >
      <h1 className={styles.title}>Welcome to my recipe search project</h1>
      <StackButtons />
    </motion.div>
  );
};

export default Intro;
