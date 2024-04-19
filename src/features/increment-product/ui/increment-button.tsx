import React, {FC, useCallback} from 'react';
import {Button} from "antd";
import {productAction, ProductType} from "@/entities/product";
import {useTypeDispatch} from "@/shared/hooks/use-dispatch";

interface IncrementButtonProps {
    product: ProductType
}

const IncrementButton: FC<IncrementButtonProps> = ({product}) => {

    const dispatch = useTypeDispatch()
    const handleIncrementProduct = useCallback(()=>{
        dispatch(productAction.increment({id: product.id}))
    },[dispatch])

    return (
        <Button type={"primary"} onClick={handleIncrementProduct}>
            +
        </Button>
    );
};

export default IncrementButton;