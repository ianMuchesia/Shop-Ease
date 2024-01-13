import { CategoryType, Product } from "@/@types/product";
import { baseURL } from "@/lib/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type categoryState = {
    products: Product[];
    loading: boolean;
    error: any;
    name:string;
    };




const initialCategoryState:categoryState= {
    products:[],
    loading: false,
    error: null,
    name:""
    };


//async action creators
export const fetchCategoryProducts = createAsyncThunk<Product[], CategoryType>(
    "category/fetchCategoryProducts",
    async ({ endpoint }) => {
      try {
        const { data } = await axios.get(`${baseURL}/${endpoint}`);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // rethrow the error to be handled by the Redux Toolkit
      }
    }
  );


  const categorySlice = createSlice({
    name: "category",
    initialState: initialCategoryState,
    reducers: {
      setCategoryName: (state, action) => {
        state.name = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.products = [];
      });
      builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      });
      builder.addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.products = [];
      });
    },
  });


export const { setCategoryName } = categorySlice.actions;
  export default categorySlice.reducer;