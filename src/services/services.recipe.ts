import axios from 'axios'

class RecipeService {
  private BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php'
  private GET_RECIPE_INFO_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php'

  async fetchRecipe(searchTerm?: string) {
    return axios
      .get(this.BASE_URL, {
        params: {
          s: searchTerm ? searchTerm : 'stew',
        },
      })
      .then((res) => res.data)
  }

  async fetchCurrentRecipe(id: string) {
    return axios
      .get(this.GET_RECIPE_INFO_URL, {
        params: {
          i: id,
        },
      })
      .then((res) => res.data)
  }
}

export default new RecipeService()