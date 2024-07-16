import React, { useState } from 'react'
import CartContext from './cart-context'

const CartContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState("0")

    const cartAddHndler = (item) => {

        // updating total price using + sign to convert to number
        const updatedTotalPrice = +totalPrice + item.price
        // finding the index to update the value
        const existingItemIndex = cartItems.findIndex(prevItem => prevItem.id === item.id)
        const existingItem = cartItems[existingItemIndex]

        if (existingItem) {
            const updatedItems = [...cartItems]
            updatedItems[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + 1 }
            setCartItems(updatedItems)
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }])
        }

        setTotalPrice(updatedTotalPrice)
    }

    const cartRemoveHandler = (item) => {

        // updating total price using + sign to convert to number
        const updatedTotalPrice = +totalPrice - item.price
        // finding the index to update the value
        const existingItemIndex = cartItems.findIndex(prevItem => prevItem.id === item.id)
        const existingItem = cartItems[existingItemIndex]

        if (existingItem.quantity === 1) { 
            setCartItems((prevCartItems)=>{
                return prevCartItems.filter((prevItem) => prevItem.id !== item.id)
            })
        } else {
            const updatedItems = [...cartItems]
            updatedItems[existingItemIndex] = {...existingItem, quantity: existingItem.quantity - 1 }
            setCartItems(updatedItems)
        }

        setTotalPrice(updatedTotalPrice)
    }

    const cartCtx = {
        cartItems: cartItems,
        totalPrice: totalPrice,
        addToCart: cartAddHndler,
        removeFromCart: cartRemoveHandler
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider