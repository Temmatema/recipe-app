import axios from "axios";

export class RecipeService {
  private BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

  async fetchRecipe(searchTerm?: string) {
    return axios
      .get(this.BASE_URL, {
        params: {
          s: searchTerm ? searchTerm : 'chicken',
        }
      })
      .then((res) => res.data);
  }
}
