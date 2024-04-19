import {Provider} from "react-redux";
import {FC, ReactNode} from "react";
import {StateSchema} from "../config/state-schema"
import {createStateStore, persistor} from "../config/store";
import {PersistGate} from 'redux-persist/integration/react';
import {AppLoader} from "@/shared/ui/loader";

interface StoreProviderProps {
    children?: ReactNode;
    initState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<StoreProviderProps> = ({children, initState}) => {

    const store = createStateStore(initState as StateSchema)

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<AppLoader/>}>
                {children}
            </PersistGate>
        </Provider>
    );
};

export default StoreProvider;