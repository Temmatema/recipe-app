export interface IRecipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strArea: string;
  strTags: string;
}

export interface RecipeProps {
  id: string;
  title: string;
  category: string;
  src: string;
  country: string;
  tags: string;
}

export interface ApiResponse {
  meals: IRecipe[];
}