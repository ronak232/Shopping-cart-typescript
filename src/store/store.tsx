import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../redux/features/Productslice/ProductSlices";

export const store = configureStore({
  reducer: {
    products: productReducers,
  },
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
