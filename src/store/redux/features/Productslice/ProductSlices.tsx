import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

// Action
export const apiCallThunk = createAsyncThunk(
  "getproducts/products",
   async () => {
    try {
      const apiUrl = "https://fakestoreapi.com/products";
      
      const getProducts = await axios.get<IProduct[]>(apiUrl);
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
  filterSearchProducts: [];
}

// IntialState....
const initialState: IProductState = {
  products: [],
  loading: true,
  error: "",
  filterSearchProducts: [],
};

const productSlice = createSlice({
  name: "getproducts",
  initialState,
  reducers: {
    searchFilterProduct: (state, action: PayloadAction<string>) => {
      const searchedProduct = state.filterSearchProducts.filter(
        (products: IProduct) => {
          console.log(
            Object.values(products.title)
              .join(" ")
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
          console.log(searchedProduct);
        }
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiCallThunk.pending, (state, action) => {
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

export const { searchFilterProduct } = productSlice.actions;
export default productSlice.reducer;
