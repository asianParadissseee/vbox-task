import {FC, memo, useEffect} from "react";
import {getProductError, getProductIsError, getProductIsLoading, getProductSelector, Product} from "@/entities/product";
import {AppLoader} from "@/shared/ui/loader";
import {useSelector} from "react-redux";
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";
import {productService} from "@/entities/product/models/service/product.service";

const ProductsList = memo(() => {

    const products = useSelector(getProductSelector)
    const isLoading = useSelector(getProductIsLoading)
    const isError = useSelector(getProductIsError)
    const errorMessage = useSelector(getProductError)
    const dispatch = useTypeDispatch()
    useEffect(() => {
        dispatch(productService([]))
    }, [dispatch])

    console.log(products)
    if (isLoading) {
        return (
            <AppLoader/>
        )
    }
    if (isError) {
        return (
            <p className="text-red-500 text-2xl text-center">
                {errorMessage}
            </p>
        )
    }
    return (
        <div className="grid grid-cols-1 md:place-items-start place-items-center md:grid-cols-2 gap-10">
            {products && products.length > 0 ?
                products.map((product) => (
                        <Product key={product.id} product={product}/>
                    )
                ) :
                (
                    <p>
                        Продуктов нет
                    </p>
                )
            }
        </div>
    );
});

export default ProductsList;