import {ActionReducerMapBuilder, createSlice} from "@reduxjs/toolkit";
import {ToggleBasketSchema} from "../schema/toggle-basket.schema";

const initialState: ToggleBasketSchema = {
    counter: 0,
    items: []
}

const toggleBasketSlice = createSlice({
    name: "toggle-basket",
    initialState,
    reducers: {
        incrementQuantityPrice(state, action) {
            const items = state.items.find(item => item.id === action.payload)
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<ToggleBasketSchema>) => {
    }
})

export const {} = toggleBasketSlice
export const {} = toggleBasketSlice