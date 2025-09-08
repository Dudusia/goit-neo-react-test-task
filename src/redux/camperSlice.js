import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from './campersOps';

const slice = createSlice({
  name: 'camper',
  initialState: {
    selectedItem: null,
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCamper.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedItem = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;

export const getCamperLoading = state => state.camper.loading;
export const getCamperError = state => state.camper.error;
export const getSelectedCamper = state => state.camper.selectedItem;
