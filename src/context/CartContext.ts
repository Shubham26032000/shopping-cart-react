import { createContext } from "react";
import type { ICartItem, IProduct } from "../types";


interface ICartContextType {
    cartItems: ICartItem[];
    addToCart: (product:IProduct) => void;
    removeFromCart: (id:number) => void;
}


// Create a Context for Cart purpose
export const CartContext = createContext<ICartContextType | undefined>(undefined)
