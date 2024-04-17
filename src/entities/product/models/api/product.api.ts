import {rtkApi} from "@/shared/api/rtk-api";
import {ProductSchema} from "../schema/product.schema"

const productApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<ProductSchema[], void>({
            query: () => ({
                url: "/products/"
            })
        }),
        getProductById: build.query<ProductSchema, number>({
            query: (id: number) => ({
                url: `/products/${id}`
            })
        })
    })
})

export const {useGetProductsQuery: useGetProducts, useGetProductByIdQuery: useGetProductById} = productApi
