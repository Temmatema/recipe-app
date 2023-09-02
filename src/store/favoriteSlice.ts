import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../types/recipes";

const initialState: IRecipe[] = []

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, {payload}:PayloadAction<IRecipe>) => {
      const index = state.findIndex(item => item.idMeal === payload.idMeal)

      if(index === -1) {
        state.push(payload)
      } else if(state.length) {
        state.splice(index, 1)
      }
    }
  }
})

export const {toggleFavorite} = favoriteSlice.actions
export default favoriteSlice