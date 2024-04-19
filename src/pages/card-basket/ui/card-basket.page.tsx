import {useSelector} from "react-redux";
import {getToggleBasketItems,  getTotalBasketAmount} from "@/features/toggle-basket";
import {Product} from "@/entities/product";

const CardBasketPage = () => {

    const productBasketItems = useSelector(getToggleBasketItems)
    const totalPrice = useSelector(getTotalBasketAmount)

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl md:text-left text-center mb-10">
                    Корзина
                </h1>
                <p>
                   Общая цена: {String(totalPrice)} $
                </p>
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