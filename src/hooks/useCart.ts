import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export function useCart() {
    let cartCtx = useContext(CartContext)
    if(!cartCtx) {
        throw new Error("Cart Context NOT Found.")
    }
    return cartCtx
}
