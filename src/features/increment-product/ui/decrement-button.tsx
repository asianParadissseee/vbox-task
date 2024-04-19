import React, {FC, useCallback} from 'react';
import {Button} from "antd";
import {productAction, ProductType} from "@/entities/product";
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";

interface DecrementButtonProps {
    product: ProductType

}
const DecrementButton: FC<DecrementButtonProps> = ({product}) => {

    const dispatch = useTypeDispatch()
    const handleDecrementProduct = useCallback(()=>{
        dispatch(productAction.decrement({id: product.id}))
    },[dispatch])

    return (
        <Button type={"primary"} onClick={handleDecrementProduct}>
            -
        </Button>
    );
};

export default DecrementButton;