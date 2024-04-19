import {FC, memo, useCallback} from "react";
import {incrementProductAction} from "../models/slice/increment-product.slice"
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";
import {Button} from "antd";
import {ProductType} from "@/entities/product";

interface IncrementButtonProps {
    product: ProductType
}

const DecrementButton: FC<IncrementButtonProps> = memo(({product}) => {

    const dispatch = useTypeDispatch()

    const handleIncrementProduct = useCallback((productId:number) => {
        dispatch(incrementProductAction.decrement({id:productId}))
    }, [dispatch])

    return (
        <div>
            <Button type={"primary"} onClick={()=>handleIncrementProduct(product.id)}>
                -
            </Button>
        </div>
    );
});

export default DecrementButton;