import {PersistPartial} from "redux-persist/es/persistReducer";

type PersistedState<T> = {
    [P in keyof T]: T[P] & PersistPartial;
};