export enum AppRoutes {
    HOME = "home",
    CARD_BASKET = "card_basket",
    NOT_FOUND = "not_found"
}

export const getRouteHome = () => "/"
export const getRouteCardBasket = () => "/card-basket"
export const getRouteNotFound = () => '/*';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: getRouteHome(),
    [AppRoutes.CARD_BASKET]: getRouteCardBasket(),
    [AppRoutes.NOT_FOUND]: getRouteNotFound()
}