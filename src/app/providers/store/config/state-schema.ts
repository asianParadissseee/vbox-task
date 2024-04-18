import {Dispatch} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {ProductSchema} from "@/entities/product";

export interface  StateSchema {
    product: ProductSchema
}
export interface ThunkExtraArg {
    api: AxiosInstance;
}
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
}