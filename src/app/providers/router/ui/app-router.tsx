import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "../config/router-config";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map(({element, path}) => (
                <Route path={path} element={(
                    <Suspense fallback={"loaders"}>
                        {element}
                    </Suspense>
                )} key={path}/>
            ))}
        </Routes>
    );
};

export default AppRouter;