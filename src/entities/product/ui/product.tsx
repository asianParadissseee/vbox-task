import {ProductSchema, useGetProducts} from "@/entities/product";
import {FC} from "react";
import {AppLoader} from "@/shared/ui/loader";
import {Button} from "antd";

interface ProductProps {
    product?: ProductSchema
}

const Product: FC<ProductProps> = ({product}) => {

    if (!product) return null;

    return (
        <div className="flex flex-col gap-3 max-w-96 min-h-80 sm:h-80 shadow-xl p-10 rounded-xl">
            <p className="text-xl">
                {product.name}
            </p>
            <p className="h-20 text-sm">
                {product.description}
            </p>
            <div className="flex flex-col  gap-10 sm:flex-row justify-between mt-20">
                <p>Цена: {product.price}</p>
                <Button type={"primary"}>В корзину</Button>
            </div>
        </div>
    );
};

export default Product;