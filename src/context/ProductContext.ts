import { createContext } from "react";
import type { IProduct } from "../types";


interface IProductContextType {
    products: IProduct[];
    addProduct: (product: Omit<IProduct, "id">) => void;
    updateProduct: (product:IProduct) => void;
    deleteProduct: (id: number) => void;
    getProducts: () => void;
}


export const ProductContext = createContext<IProductContextType | undefined>(undefined)

