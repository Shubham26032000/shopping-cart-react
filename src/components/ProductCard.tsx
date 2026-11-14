
import { type IProduct } from "../types"
import { useState } from "react"
//import { CartContext } from "../context/CartContext"
import { useCart } from "../hooks/useCart"


interface IProductCardProps {
    product: IProduct
}


// export function ProductCard(props : IProductCardProps) {
export function ProductCard( { product } : IProductCardProps  ) {
    //let sampleProduct : IProduct = { id: 1, name:"Galaxy S", price: 15000, instock: false}
    // let sampleProduct : IProduct = props.product
    let sampleProduct : IProduct = product


    // let likes = 0
    let [ likes, setLikes ] = useState(0)


    // Connect to the Cart Context
    /*let cartCtx = useContext(CartContext)
    if(!cartCtx){
        throw new Error("Cart Context Error in Product Card")
    }
    let { addToCart } = cartCtx*/


    let { addToCart } = useCart()       // Custom Hook


    function handleAddToCart() {
        console.log("Add To Cart Button Clicked...")
        addToCart(product)
    }


    function increment() {
        console.log("Increment Function Invoked.")
        // likes = likes + 1
        // Update the State
        setLikes(likes + 1)
    }


    return <div style={{border:'1px solid #ddd', width: 200, borderRadius:8, padding: 16}}>
        <h3> { sampleProduct.name } </h3>
        <p> { sampleProduct.price } </p>
        <p> { (sampleProduct.instock) ? "Available" : "Not Available"  } </p>
        <button disabled={!sampleProduct.instock} onClick={ handleAddToCart }>Add To Cart</button>&nbsp;
        <button onClick={increment}>Likes {likes} </button>
    </div>
}
