import {FC, memo} from "react";
import {Product, ProductSchema, useGetProducts} from "@/entities/product";
import {AppLoader} from "@/shared/ui/loader";

const ProductsList = memo(() => {

    const {data: products, isLoading, isSuccess, isError, error} = useGetProducts()
    console.log(products)

    if (isLoading) {
        return (
            <AppLoader/>
        )
    }
    return (
        <div className="grid grid-cols-1 md:place-items-start place-items-center md:grid-cols-2 gap-10">
            {products && products.length > 0 ?
                products.map((product) => (
                        <Product key={product.id} product={product} />
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