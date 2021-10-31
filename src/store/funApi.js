import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const funApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "/"}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => `/products/?format=json`
        }),
        getProduct: build.query({
            query: (id) => `/products/${id}/?format=json`
        })
    })
})


export const {useGetProductsQuery,useGetProductQuery} = funApi