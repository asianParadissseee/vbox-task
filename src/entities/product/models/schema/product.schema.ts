export interface ProductType {
    id: number;
    name: string;
    description: string;
    price: number
}

export interface ProductSchema  {
    isLoading?: boolean;
    isError?: boolean;
    error?: string;
    products: ProductType[]
}
