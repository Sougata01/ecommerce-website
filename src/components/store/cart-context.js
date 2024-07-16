import React from "react"

const CartContext = React.createContext({
    cartItems: [],
    totalPrice: 0,
    addToCart: (product) => {},
    removeFromCart: (productId) => {}
})

export default CartContext