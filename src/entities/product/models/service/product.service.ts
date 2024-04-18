import {createAsyncThunk} from "@reduxjs/toolkit";
import { ProductType} from "@/entities/product";
import {ThunkConfig} from "@/app/providers/store";

export const productService = createAsyncThunk<ProductType[], ProductType[], ThunkConfig<string>>("products/service", async (_, thunkAPI) => {

    const {extra, rejectWithValue, dispatch} = thunkAPI
    try {
        const res = await extra.api.get("/products")
        if (!res.data) {
            throw new Error("Ошибка получения продуктов")
        }
        return res.data
    } catch (e) {
        console.log(e)
        return  rejectWithValue("Ошибка получения продуктов")
    }

})