import {FC, memo, useCallback} from "react";
import {Button} from "antd";
import {incrementProductAction} from "../models/slice/increment-product.slice"
import {ProductType} from "@/entities/product";
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";

interface IncrementButtonProps {
    product: ProductType
}

const IncrementButton: FC<IncrementButtonProps> = memo(({product}) => {

    const dispatch = useTypeDispatch()

    const handleIncrementProduct = useCallback((productId: number) => {
        dispatch(incrementProductAction.increment({id: productId }))
    }, [dispatch])

    return (
        <div>
            <Button type={"primary"} onClick={()=>handleIncrementProduct(product.id)}>
                +
            </Button>
        </div>
    );
});

export default IncrementButton;