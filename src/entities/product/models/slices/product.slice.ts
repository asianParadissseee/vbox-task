import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductSchema, ProductType} from "../schema/product.schema"
import {productService} from "../service/product.service"

const initialState: ProductSchema = {
    products: [],
    error: '',
    isError: false,
    isLoading: false
}
const productSlice = createSlice({
    name: "product/slice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productService.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(productService.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
            state.isLoading = false
            state.products = action.payload
        })
        builder.addCase(productService.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.error = "Ошибка получения продуктов"
        })
    }
})

export const {reducer: productReducer} = productSlice
export const {actions: productAction} = productSlice