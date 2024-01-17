import { baseURL } from "@/lib/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseURL}`,
    
    }),
    reducerPath: "apis",
    tagTypes:["allproducts","product", "categories","cosmetics"],
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
        getCosmetics: builder.query({
            query: () => `/categories/daaa1b3e-e179-4964-9e02-18a76b035aad/products
            `,
            providesTags: ["cosmetics"],
        })
    }),
})

export const {useGetAllProductsQuery, useGetProductQuery, useGetCategoriesQuery, useGetCosmeticsQuery} = api;