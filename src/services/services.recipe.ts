import axios from "axios";

export class RecipeService {
  private BASE_URL = 'https://api.spoonacular.com/recipes/'
  private defaultSearch = 'complexSearch'

  async fetchRecipe() {
    return axios.get(this.BASE_URL + this.defaultSearch, {
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY
      }
    }).then(res => res.data)
  }
} 