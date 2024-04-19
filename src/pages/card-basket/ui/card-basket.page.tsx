import {useSelector} from "react-redux";
import {getToggleBasketItems, getTotalBasketAmount, toggleBasketAction} from "@/features/toggle-basket";
import {Product} from "@/entities/product";
import {Button} from "antd";
import {useCallback} from "react";
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";

const CardBasketPage = () => {

    const productBasketItems = useSelector(getToggleBasketItems)
    const totalPrice = useSelector(getTotalBasketAmount)

    const dispatch = useTypeDispatch()

    const clearProductBasket = useCallback(()=>{
        dispatch(toggleBasketAction.clearBasket())
    },[dispatch])

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl md:text-left text-center mb-10">
                    Корзина
                </h1>
                <div className="flex gap-10">
                    <p>
                        Общая цена: {String(totalPrice)} $
                    </p>
                    <Button onClick={clearProductBasket} type={"primary"}>
                        Очистить корзину
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
                {
                    productBasketItems.length ? productBasketItems.map((product) => (
                        <Product product={product} key={product.id}/>
                    )) : (
                        <p>
                            Корзина пуста
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default CardBasketPage;