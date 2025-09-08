import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favourites",
  initialState: {
    likedItems: [],
  },
  reducers: {
    addLikedCamper: (state, action) => {
      state.likedItems = [...state.likedItems, action.payload];
    },
    removeLikedCamper: (state, action) => {
      state.likedItems = state.likedItems.filter(id => id !== action.payload);
    },
  },
});

export const getCampersLikedItems = state => state.favourites.likedItems;

export const { addLikedCamper, removeLikedCamper } = slice.actions;

export default slice.reducer;