import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./search.module.scss";
import { motion } from "framer-motion";

const Search: FC = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="pt-[12rem]">
      <motion.label animate={{scale: isFocus ? 1.1 : 1}} htmlFor="search" className={styles["input-wrap"]}>
        <FiSearch />
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className={styles.input}
          type="text"
          id="search"
          placeholder="Type the dish or press Enter"
        />
      </motion.label>
    </div>
  );
};

export default Search;
