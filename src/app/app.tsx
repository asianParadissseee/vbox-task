import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "@/app/providers/router";
import {StoreProvider} from "@/app/providers/store";
import {BaseLayout} from "@/app/providers/layout";
import {ErrorBoundary} from "@/app/providers/error";

const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <BaseLayout>
                        <AppRouter/>
                    </BaseLayout>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;