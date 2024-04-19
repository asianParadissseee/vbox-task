import {StateSchema, ThunkExtraArg} from "../config/state-schema";
import {$api} from "@/shared/api/http";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
// @ts-ignore
import {GetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import {setupListeners} from "@reduxjs/toolkit/query";
import {productReducer} from "@/entities/product";
import {toggleBasketReducer} from "@/features/toggle-basket";

export const createStateStore = (state?: StateSchema) => {

    const extraArg: ThunkExtraArg = {
        api: $api
    }

    const rootReducer: ReducersMapObject<StateSchema> = {
        product: productReducer,
        toggleBasket: toggleBasketReducer
    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: state,
        devTools: true,
        middleware: (getDefaultMiddleware: GetDefaultMiddleware<StateSchema>) => (
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg
                }
            })
        )
    })
}
setupListeners(createStateStore().dispatch);
export type TypeDispatch = ReturnType<typeof createStateStore>["dispatch"]
