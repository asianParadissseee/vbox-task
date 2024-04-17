import {Dispatch} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {rtkApi} from "@/shared/api/rtk-api";

export interface  StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

}
export interface ThunkExtraArg {
    api: AxiosInstance;
}
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
}