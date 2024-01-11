import { baseURL } from "@/lib/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseURL}`,
    
    }),
    reducerPath: "apis",
    tagTypes:["allproducts","product", "categories"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`,
            providesTags: ["allproducts"],
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ["product"],
        }),
        getCategories: builder.query({
            query: () => `/categories`,
            providesTags: ["categories"],
        }),
    }),
})

export const {useGetAllProductsQuery, useGetProductQuery, useGetCategoriesQuery} = api;