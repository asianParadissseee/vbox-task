import Product from "./ui/product"
import {useGetProductById, useGetProducts} from "./models/api/product.api"
import {ProductSchema} from "./models/schema/product.schema"

export {
    Product,
    useGetProductById,
    useGetProducts,
}
export type {
    ProductSchema
}