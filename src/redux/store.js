import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import campersReducer from './campersSlice';
import filtersReducer from './filtersSlice';
import favouritesReducer from './favouritesSlice'
import storage from "redux-persist/lib/storage";

const persistedFavouritesReducer = persistReducer(
  {
    key: "app-favourites",
    storage,
    whitelist: ["likedItems"],
  },
  favouritesReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favourites: persistedFavouritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }),
});

export const persistor = persistStore(store);
