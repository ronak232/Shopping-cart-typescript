import { createSlice } from "@reduxjs/toolkit";

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
  name: "artproducts",
  initialState,
  reducers: {
    handleRemove: (state, action) => {
      state.loading = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase((state, action) => {
  //       state.loading = false;

  //     })
  //     .addCase(apiCallThunk.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.products.push(...(action.payload || []));
  //     })
  //     .addCase(apiCallThunk.rejected, (state, action) => {
  //       state.loading = false;
  //     });
  // },
});

export default cartSlice.reducer;
