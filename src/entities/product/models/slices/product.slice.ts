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
    reducers: {
        increment(state, action: PayloadAction<{ id: number }>) {
            state.products = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return {...product, counter: (product.counter || 0) + 1};
                }
                return product;
            });
        },
        decrement(state, action: PayloadAction<{ id: number }>) {
            state.products = state.products.map(product => {
                if (product.id === action.payload.id && product.counter && product.counter > 0) {
                    return {...product, counter: product.counter - 1};
                }
                return product;
            });
        }
    },
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