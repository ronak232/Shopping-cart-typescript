import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./redux/features/Productslice/ProductSlices";
import cartItemSlice from "./redux/features/CartItemsSlice/cartItemslice";

export const store = configureStore({
  reducer: {
    products: productReducers,
    cartItems: cartItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
