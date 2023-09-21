import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  quantity:number
}
// Action
export const apiCallThunk = createAsyncThunk(
  "getproducts/products",
  async (page) => {
    try {
      const getProducts = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      ); //Return the array
      // .then((response) => {
      //   return response.data;
      // });
      console.log(getProducts);
      return getProducts.data;
    } catch (err) {
      console.log("some error from api....");
    }
  }
);

export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
}

export const CartInterface : IProductState={
  products:[],
  loading:false,
  error:""
}

// IntialState....
const initialState: IProductState = {
  products: [],
  loading: false,
  error: "",
};

const productSlice = createSlice({
  name: "getproducts",
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<IProduct>) => {
      state.products.push(action.payload)
      axios.post("https://fakestoreapi.com/products", action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiCallThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(apiCallThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(...(action.payload || []));
      })
      .addCase(apiCallThunk.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {addToCart} = productSlice.actions
export default productSlice.reducer;
