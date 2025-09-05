import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';

const slice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCampers.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.page = state.page + 1;
        state.items = [
          ...state.items,
          ...action.payload.items.filter(
            camper => !state.items.map(item => item.id).includes(camper.id)
          ),
        ];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;

export const getCampers = state => state.campers.items;
export const getCampersLoading = state => state.campers.loading;
export const getCampersError = state => state.campers.error;
