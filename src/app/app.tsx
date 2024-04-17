import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "@/app/providers/router";
import {StoreProvider} from "@/app/providers/store";

const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <AppRouter/>
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;