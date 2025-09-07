import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamper } from './campersOps';

const initialState = {
  total: 0,
  items: [],
  selectedItem: null,
  likedItems: [],
  loading: false,
  error: null,
  page: 1,
  limit: 5,
};

const slice = createSlice({
  name: 'campers',
  initialState: initialState,
  reducers: {
    resetCampersState: state => {
      state.total = initialState.total;
      state.items = initialState.items;
      state.selectedItem = initialState.selectedItem;
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.page = initialState.page;
      state.limit = initialState.limit;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addLikedCamper: (state, action) => {
      state.likedItems = [...state.likedItems, action.payload];
    },
    removeLikedCamper: (state, action) => {
      state.likedItems = state.likedItems.filter(id => id !== action.payload);
    },
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
        state.items = [
          ...state.items,
          ...action.payload.items.filter(
            camper => !state.items.map(item => item.id).includes(camper.id)
          ),
        ];
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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

export const { setPage, resetCampersState, addLikedCamper, removeLikedCamper } =
  slice.actions;

export default slice.reducer;

export const getCampers = state => state.campers.items;
export const getCampersLoading = state => state.campers.loading;
export const getCampersError = state => state.campers.error;
export const getCampersPage = state => state.campers.page;
export const getCampersLimit = state => state.campers.limit;
export const getCampersTotal = state => state.campers.total;
export const getCampersLikedItems = state => state.campers.likedItems;

export const areThereMoreCampers = createSelector(
  [getCampersPage, getCampersLimit, getCampersTotal],
  (page, limit, total) => page * limit < total
);

// TODO: this should be a separate slice
export const getSelectedCamper = state => state.campers.selectedItem;
