import {ProductType} from "@/entities/product";
import {FC, useCallback} from "react";
import {Button} from "antd";
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";
import {toggleBasketAction, isProductInBasket} from "@/features/toggle-basket";
import {useSelector} from "react-redux";

interface ProductProps {
    product?: ProductType
}

const Product: FC<ProductProps> = ({product}) => {

    const dispatch = useTypeDispatch()
    const getProductBasket = useCallback((product: ProductType) => {
        dispatch(toggleBasketAction.addCard(product as ProductType))
    }, [])
    const getDeleteProductBasket = useCallback((product: ProductType) => {
        dispatch(toggleBasketAction.removeFromCart(product as ProductType))
    }, [])
    const isProduct = useSelector(isProductInBasket(product?.id as number))

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
                {
                    !isProduct ? (
                        <Button onClick={() => getProductBasket(product)} type={"primary"}>В корзину</Button>
                    ) : (
                        <Button onClick={()=>getDeleteProductBasket(product)}>Удалить</Button>
                    )
                }
            </div>
        </div>
    );
};

export default Product;