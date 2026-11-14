



import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { ICartItem, IProduct } from "../types";


interface ICartProviderProps {
    children: ReactNode
}


export function CartProvider({children} : ICartProviderProps) {


    const [ cartItems, setCartItems ] = useState<ICartItem[]>([])


    function addToCart(product:IProduct) {
        setCartItems((prev) => [...prev, {product, quantity: 1}])
    }


    function removeFromCart(id:number) {
        setCartItems((prev) => prev.filter((item) => item.product.id != id ))
    }


    return <CartContext.Provider value={ {cartItems, addToCart, removeFromCart} }>
        { children }
    </CartContext.Provider>
}
