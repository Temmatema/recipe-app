import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../types/recipes";
import { RecipeService } from "../services/services.recipe";

export const useFetchRecipes = (searchTerm?: string) => {
  return useQuery({
    queryKey: ["recipe"],
    queryFn: (): Promise<ApiResponse> =>
      new RecipeService().fetchRecipe(searchTerm),
  });
};
