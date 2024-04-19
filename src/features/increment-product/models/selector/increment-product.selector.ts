import {StateSchema} from "@/app/providers/store";


export const getCounter = (productId: number)=>(state: StateSchema) => {
    return state?.product.products.find(el => el.id === productId)
}

