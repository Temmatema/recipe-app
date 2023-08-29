export interface IRecipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strArea: string;
  strTags: string;
}

export interface ApiResponse {
  meals: IRecipe[];
}