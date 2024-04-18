import {ProductSchema} from "@/entities/product";

export interface ToggleBasketSchema {
    items: ProductSchema[],
    counter: number
}