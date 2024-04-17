import {Provider} from "react-redux";
import {FC, ReactNode} from "react";
import {StateSchema} from "../config/state-schema"
import {createStateStore} from "../config/store";

interface StoreProviderProps {
    children?: ReactNode;
    initState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<StoreProviderProps> = ({children, initState}) => {

    const store = createStateStore(initState as StateSchema)

    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;