import IncrementButton from "./ui/increment-button"
import DecrementButton from "./ui/decrement-button"
import {incrementProductAction, incrementProductReducer} from "./models/slice/increment-product.slice"
import {getCounter} from "./models/selector/increment-product.selector"

export {
    incrementProductAction,
    incrementProductReducer,
    getCounter,
    IncrementButton,
    DecrementButton
}