import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "@/app/providers/router";
import {StoreProvider} from "@/app/providers/store";
import {BaseLayout} from "@/app/providers/layout";

const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <BaseLayout>
                    <AppRouter/>
                </BaseLayout>
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;