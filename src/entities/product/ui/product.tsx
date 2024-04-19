import {ProductType} from "@/entities/product";
import {FC, memo, useCallback} from "react";
import {Button, message} from "antd";
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";
import {toggleBasketAction, isProductInBasket} from "@/features/toggle-basket";
import {useSelector} from "react-redux";
import {DecrementButton, IncrementButton} from "@/features/increment-product";

interface ProductProps {
    product?: ProductType
}

const Product: FC<ProductProps> = memo(({product}) => {

    const [messageApi, contextHolder] = message.useMessage();


    const dispatch = useTypeDispatch()
    const getProductBasket = useCallback((product: ProductType) => {
        dispatch(toggleBasketAction.addCard(product as ProductType))
        messageApi.open({
            type: "success",
            content: "Товар успешно добавлен"
        })
    }, [])
    const getDeleteProductBasket = useCallback((product: ProductType) => {
        dispatch(toggleBasketAction.removeFromCart(product as ProductType))
        messageApi.open({
            type: "success",
            content: "Товар убран"
        })
    }, [])
    const isProduct = useSelector(isProductInBasket(product?.id as number))

    if (!product) return null;


    return (
        <div className="flex flex-col gap-3 max-w-96 min-h-80 shadow-xl p-10 rounded-xl">
            {contextHolder}
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
                        <Button onClick={() => getDeleteProductBasket(product)}>Удалить</Button>
                    )
                }
            </div>
            <div className="flex gap-10 justify-start items-nter">
                <IncrementButton product={product}/>
                <p>{product.counter}</p>
                <DecrementButton product={product}/>
            </div>
        </div>
    );
});

export default Product;