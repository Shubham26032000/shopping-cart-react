import { useEffect, useState, type ReactNode } from "react";
import { ProductContext } from "./ProductContext";
import type { IProduct } from "../types";
import { getAllProducts, addNewProduct, updateExistingProduct, removeProduct } from "../services/ProductService";


interface IProductProvider {
    children: ReactNode
}


export function ProductProvider({children}:IProductProvider) {
    const [ products, setProducts ] = useState<IProduct[]>([])
   
    const addProduct = async (product: Omit<IProduct, "id">) => {
        let savedProduct = await addNewProduct(product)
        setProducts((prev) => [...prev, savedProduct])
    }


    const updateProduct = async (product:IProduct) => {
        let updatedProduct = await updateExistingProduct(product)
        setProducts((prev) => {
            return prev.map((p) => p.id == updatedProduct.id ? updatedProduct : p)
        })
    }


    const deleteProduct = async (id:number) => {
        await removeProduct(id)
        setProducts((prev) => prev.filter((p) => p.id != id))
    }
   
    const getProducts = async () => {
        let data = await getAllProducts()
        setProducts(data)
    }


    // After Render
    useEffect(() => {
        getProducts()
    }, [])


    return <ProductContext.Provider value={ {products, addProduct, updateProduct, deleteProduct, getProducts} }>
        { children }
    </ProductContext.Provider>
}
