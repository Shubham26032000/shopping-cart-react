import axios from "axios";
import type { IProduct } from "../types";


const API_ENDPOINT = "http://localhost:3000/wsproducts"


export const getAllProducts = async () : Promise<IProduct[]> => {
    let response = await axios.get<IProduct[]>(API_ENDPOINT)
    return response.data
}


export const addNewProduct = async (newProduct:Omit<IProduct, "id">) => {
     let response = await axios.post<IProduct>(API_ENDPOINT, newProduct)
     return response.data
}


export const updateExistingProduct = async(modifiedProduct:IProduct) : Promise<IProduct> => {
    let response = await axios.put<IProduct>(API_ENDPOINT+'/'+modifiedProduct.id, modifiedProduct)
    return response.data
}


export const removeProduct = async (id:number) => {
    await axios.delete(API_ENDPOINT+"/"+id)
}
