import type { ICartItem } from "../types"
//import { useContext } from "react"
//import { CartContext } from "../context/CartContext"
import { useCart } from "../hooks/useCart"


export function CartItems() {
    // Connect to Cart Context
    /*let cartCtx = useContext(CartContext)
    if(!cartCtx) {
        throw new Error("Cart Context Error in Cart Items Component")
    }
    let { cartItems, removeFromCart } = cartCtx */


    let { cartItems, removeFromCart } = useCart();      // Custom Hook


    //let items : ICartItem[] = []
    let items = cartItems
    let output = null


    if(items.length > 0) {
        output = items.map((item:ICartItem) => {
            return <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>{item.product.price * item.quantity}</td>
                <td><button onClick={() => removeFromCart(item.product.id)}>Delete</button></td>
            </tr>
        })
    } else {
        output = <tr>
            <td colSpan={5}>No Items Found.</td>
        </tr>
    }


    return <>
        <h3>Cart Items</h3>


        <table border={1}>
            <thead>
                <tr>
                    <th>Item Name</th><th>Price</th><th>Quantity</th><th>Amount</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { output }
            </tbody>
        </table>
    </>
}
