import { useQuery } from '@tanstack/react-query'
import RecipeService from '../services/services.recipe'
import { ApiResponseCurrent } from '../types/recipe.current'

export const useFetchCurrent = (id: string) => {
  return useQuery({
    queryKey: ['recipeCurrent'],
    queryFn: (): Promise<ApiResponseCurrent> => RecipeService.fetchCurrentRecipe(id),
    staleTime: 0,
    refetchOnWindowFocus: false,
  })
}
