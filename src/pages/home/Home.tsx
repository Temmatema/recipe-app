import { FC } from "react";
import Search from "../../components/search/Search";
import CardList from "../../components/cards/CardList";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";

const Home: FC = () => {
  const { data, isLoading } = useFetchRecipes()

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Search />
      {
        isLoading ? <h1>Loading</h1> : (data && <CardList items={data.meals}/>)
      }
    </div>
  );
};

export default Home;
