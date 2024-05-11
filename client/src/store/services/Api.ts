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
            query: () => `/categories/03ad39af-1e85-4fad-9b91-2775b0538cab/products
            `,
            providesTags: ["cosmetics"],
        })
    }),
})

export const {useGetAllProductsQuery, useGetProductQuery, useGetCategoriesQuery, useGetCosmeticsQuery} = api;