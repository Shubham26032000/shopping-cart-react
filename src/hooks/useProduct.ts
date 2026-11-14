import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";


export function useProduct() {
    let productCtx = useContext(ProductContext)
    if(!productCtx) {
        throw new Error("Product Context Error")
    }
    return productCtx
}

