export interface IProduct {
    id: number
    name:string
    price:number
    instock: boolean
}


export interface ICartItem {
    product: IProduct;
    quantity: number;
}
