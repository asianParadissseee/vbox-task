import {Dispatch} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {ProductSchema} from "@/entities/product";
import {ToggleBasketSchema} from "@/features/toggle-basket";
import {PersistPartial} from "redux-persist/es/persistReducer";
import {PersistedState} from "@/app/types/redux";

export interface StateSchema {
    product: ProductSchema & PersistPartial;
    toggleBasket: ToggleBasketSchema & PersistPartial;
}
export type StateSchemaPersistPartial = PersistedState<StateSchema>;


export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
}