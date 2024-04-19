export interface ProductType {
    id: number;
    name: string;
    description: string;
    price: string;
    counter: number
}

export interface ProductSchema  {
    isLoading?: boolean;
    isError?: boolean;
    error?: string;
    products: ProductType[]
}
