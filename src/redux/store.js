import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import favouritesReducer from "./favouritesCampers/slice";
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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "campers",
  storage,
  whitelist: ["items"],
};

const persistConfigFavourites = {
  key: "favourites",
  storage,
};

const persistedReducer = persistReducer(persistConfig, campersReducer);
const persistFavouritesReducer = persistReducer(
  persistConfigFavourites,
  favouritesReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedReducer,
    favourites: persistFavouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
