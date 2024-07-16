import { useContext } from "react";
import CartContext from "./store/cart-context";

const CartBtn = (props) => {

    const cartCtx = useContext(CartContext)
    const totalItems = cartCtx.cartItems.reduce((curNumber, item) => curNumber + item.quantity,
    0)

    return (
        <a href="#cart" onClick={props.onShow} className="link-offset-2 link-underline link-underline-opacity-0 border border-2 border-primary rounded-2 text-white p-1 m-2 position-relative">Cart
        <span className="position-absolute top-0 start-100 translate-middle-y">{totalItems}</span>
        </a>
    )
}

export default CartBtn;   