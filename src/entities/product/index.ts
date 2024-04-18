import Product from "./ui/product"
import {ProductSchema, ProductType} from "./models/schema/product.schema"
import {productReducer, productAction} from "./models/slices/product.slice"
import {
    getProductIsLoading,
    getProductSelector,
    getProductIsError,
    getProductError
} from "./models/selector/product.selector"

export {
    Product,
    productReducer,
    productAction,
    getProductIsLoading,
    getProductIsError,
    getProductSelector,
    getProductError
}
export type {
    ProductSchema,
    ProductType
}