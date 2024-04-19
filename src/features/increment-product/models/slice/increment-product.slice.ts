import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductSchema, ProductType} from "@/entities/product";
import {productService} from "@/entities/product/models/service/product.service";

const initialState: ProductSchema = {
    products: []
}
const incrementProductSlice = createSlice({
    name: "incrementProduct/slice",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<{ id: number }>) {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product && product.counter) {
                product.counter = (product.counter || 0) + 1;
            }
        },
        decrement(state, action: PayloadAction<{ id: number }>) {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product && product.counter && product.counter > 1) {
                product.counter--
            }
        }
    }
})
export const {reducer: incrementProductReducer} = incrementProductSlice
export const {actions: incrementProductAction} = incrementProductSlice
