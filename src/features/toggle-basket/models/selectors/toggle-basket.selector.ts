import {StateSchema} from "@/app/providers/store";
import {createSelector} from "@reduxjs/toolkit";

export const getToggleBasketItems = (state: StateSchema) => state.toggleBasket.items;


export const getTotalBasketAmount = createSelector(getToggleBasketItems,
    (items) => items.reduce((total, item) => {
        const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(priceNumber)) {
            const newTotal = total + priceNumber;
            console.log(`Adding: ${priceNumber} to total: ${total}, new total: ${newTotal}`);
            return newTotal;
        } else {
            console.log(`Failed to extract a valid number from price: ${item.price}`);
            return total;
        }
    }, 0)
)
export const isProductInBasket = (productId: number) => (state: StateSchema) => {
    return state.toggleBasket.items.some(product => product.id === productId);
};
export const getToggleBasketQuantity = createSelector(getToggleBasketItems,
    (items) => items.forEach((item) => item.quantity)
)
