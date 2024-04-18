import {StateSchema} from "@/app/providers/store";

export const getProductSelector = (state: StateSchema) => state.product.products
export const getProductError = (state: StateSchema) => state.product.error
export const getProductIsLoading = (state: StateSchema) => state.product.isLoading
export const getProductIsError = (state: StateSchema) => state.product.isError