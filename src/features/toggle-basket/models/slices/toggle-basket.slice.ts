import {ActionReducerMapBuilder, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductBasketItem, ToggleBasketSchema} from "../schema/toggle-basket.schema";
import {ProductType} from "@/entities/product";

const initialState: ToggleBasketSchema = {
    counter: 0,
    items: []
}

const toggleBasketSlice = createSlice({
    name: "toggle-basket",
    initialState,
    reducers: {
        addCard(state, action: PayloadAction<ProductType>) {
            const existingIndex = state.items.findIndex(item => item.id === action.payload.id)
            if (existingIndex >= 0) {
                state.items[existingIndex].quantity += 1
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart(state, action: PayloadAction<ProductType>) {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index >= 0) {
                state.counter -= parseInt(state.items[index].price) * state.items[index].quantity;
                state.items.splice(index, 1);
            }
        },
        clearBasket(state) {
            state.items = []
        }
    }
})

export const {actions: toggleBasketAction} = toggleBasketSlice
export const {reducer: toggleBasketReducer} = toggleBasketSlice