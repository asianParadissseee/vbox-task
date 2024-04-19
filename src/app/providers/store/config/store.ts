import {StateSchema, StateSchemaPersistPartial, ThunkExtraArg} from "../config/state-schema";
import {$api} from "@/shared/api/http";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {productReducer} from "@/entities/product";
import {toggleBasketReducer} from "@/features/toggle-basket";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
// @ts-ignore
import {GetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";


const persistConfig = {
    key: "root",
    storage: storage
}

const productPersistReducer = persistReducer(persistConfig, productReducer)
const toggleBasketPersistReducer = persistReducer(persistConfig, toggleBasketReducer)

export const createStateStore = (state?: StateSchema) => {

    const extraArg: ThunkExtraArg = {
        api: $api
    }

    const rootReducer: ReducersMapObject<StateSchemaPersistPartial> = {
        product: productPersistReducer,
        toggleBasket: toggleBasketPersistReducer,
    }
    return configureStore({
        reducer: rootReducer,
        preloadedState: state,
        devTools: true,
        middleware: (getDefaultMiddleware: GetDefaultMiddleware<StateSchema>) => (
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg
                },
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })
        )
    })
}
setupListeners(createStateStore().dispatch);
export type TypeDispatch = ReturnType<typeof createStateStore>["dispatch"]
export const persistor = persistStore(createStateStore())
