import {Dispatch} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {ProductSchema} from "@/entities/product";
import {ToggleBasketSchema} from "@/features/toggle-basket";

export interface  StateSchema {
    product: ProductSchema;
    toggleBasket: ToggleBasketSchema
}
export interface ThunkExtraArg {
    api: AxiosInstance;
}
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
}