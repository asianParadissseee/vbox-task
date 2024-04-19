import { ProductType} from "@/entities/product";


export interface ProductBasketItem extends ProductType{
    quantity: number
}

export interface ToggleBasketSchema {
    items: ProductBasketItem[],
}