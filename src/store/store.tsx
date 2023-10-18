import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import productReducer from "./redux/features/Productslice/ProductSlices";
import cartItemReducer from "./redux/features/CartItemsSlice/CartItemSlice";

// we can persist the state that we want to persist using blacklist or whitelist.
// whiteList --> what to persist
// blacklist --> what not to persist
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cartItems"],
};

const rootReducer = combineReducers({
  products: productReducer,
  cartItems: cartItemReducer,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
