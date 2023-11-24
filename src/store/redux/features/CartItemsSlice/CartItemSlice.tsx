import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartItems {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}
export interface InitialCartState {
  cartItems: ICartItems[];
  loading: boolean;
  error: string;
}

const initialState: InitialCartState = {
  cartItems: [],
  loading: true,
  error: "",
};

const cartSlice = createSlice({
  name: "cartproducts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItems>) => {
      // Checking the item exist in the cart
      const findItemCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findItemCart) {
      
      }
      // });

      state.cartItems.push(action.payload);
    },
    handleRemove: (state, action: PayloadAction<number>) => {
      const removeCartItem = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      state.cartItems = removeCartItem;
    },
    // calculateTotalPriceAmount: (state, action): void => {
    //   state.cartItems.map((item) => item.price * item.quantity)
    //   .reduce((total, value) => total + value, 0)}
    // },
    clearAllCartItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, handleRemove, clearAllCartItems } = cartSlice.actions;
export default cartSlice.reducer;
