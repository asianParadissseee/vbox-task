import {RouteProps} from "react-router-dom";
import {AppRoutes, getRouteCardBasket, getRouteHome, getRouteNotFound} from "@/shared/const/router-const";
import {lazy} from "react";

const HomePage = lazy(() => import("@/pages/home/ui/home.page"))
const CardBasketPage = lazy(() => import("@/pages/card-basket/ui/card-basket.page"))
const NotFound = lazy(() => import("@/pages/notfound/ui/notfound.page"))

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: getRouteHome(),
        element: <HomePage/>
    },
    [AppRoutes.CARD_BASKET]: {
        path: getRouteCardBasket(),
        element: <CardBasketPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFound/>
    }
}