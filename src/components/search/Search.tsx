import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./search.module.scss";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { RecipeService } from "../../services/services.recipe";

const Search: FC = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useQuery({
    queryKey: ['recipe'],
    queryFn: () => new RecipeService().fetchRecipe(searchTerm),
    enabled: isFetching,
    onSuccess: () => {
      setIsFetching(false)
      setSearchTerm('')
    }
  })

  const handleSearch = (event:React.KeyboardEvent<HTMLElement>) => {
    if(event.key === 'Enter') {
      setIsFetching(true)
    }
  }

  return (
    <div className="mb-8">
      <motion.label
        htmlFor="search"
        className={styles["input-wrap"]}
      >
        <FiSearch />
        <input
          className={styles.input}
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(event) => handleSearch(event)}
          placeholder="Searching for a recipe..."
        />
      </motion.label>
    </div>
  );
};

export default Search;
