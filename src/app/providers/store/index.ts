import StoreProvider from "./ui/store-provider"
import {createStateStore,TypeDispatch} from "./config/store"
import {StateSchema, ThunkExtraArg, ThunkConfig} from "./config/state-schema"

export type {
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
    TypeDispatch
}
export {
    createStateStore,
    StoreProvider
}