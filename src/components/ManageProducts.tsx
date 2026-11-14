





import { useProduct } from "../hooks/useProduct"
import type { IProduct } from "../types"
import { useRef } from "react"


function ManageProducts() {
    let { products, addProduct, updateProduct, deleteProduct, getProducts } = useProduct()
    let output = null


    if(products.length > 0) {
        output = products.map((product:IProduct) => {
            return <tr key={product.id}>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{product.price}</td>
                <td> { product.instock ? "Available" : "Out of Stock" }</td>
                <td>
                    <button onClick={() => handleView(product)}>View</button>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
            </tr>
        })
    } else {
        output = <tr>
            <td colSpan={5}>No Products Found.</td>
        </tr>
    }


    // Define Reference Variables
    const idRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const stockRef = useRef<HTMLInputElement>(null)


    // Define a function to clear form input element's value
    const clearFormFields = () => {
        if(idRef.current) idRef.current.value = ""
        if(nameRef.current) nameRef.current.value = ""
        if(priceRef.current) priceRef.current.value = ""
        if(stockRef.current) stockRef.current.checked = true
    }


    const handleSave = async () => {
        let id =  Number(idRef.current?.value)
        let name = nameRef.current?.value || ""
        let price = Number(priceRef.current?.value || 0)
        let instock = stockRef.current?.checked || false


        if(id) {
            // Update Product
            await updateProduct({id, name, price, instock})
        } else {
            // Add Product
            await addProduct({name, price, instock})
        }
        clearFormFields()
    }


    function handleView(product:IProduct) {
        if(idRef.current) idRef.current.value = product.id.toString()
        if(nameRef.current) nameRef.current.value = product.name
        if(priceRef.current) priceRef.current.value = product.price.toString()
        if(stockRef.current) stockRef.current.checked = product.instock
    }


    async function handleDelete(id:number) {
        await deleteProduct(id)
    }


    return <>
        <h3>Manage Products</h3>


        <form>
            ID: <input type="text" readOnly style={{width:'50px'}} ref={idRef} />
            Name: <input type="text" ref={nameRef} />
            Price: <input type="text" ref={priceRef} />
            Instock: <input type="checkbox" defaultChecked ref={stockRef} />
            <button type="button" onClick={handleSave}>Save</button>
        </form>
        <br />
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Price</th><th>In Stock</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { output }
            </tbody>
        </table>
    </>
}


export default ManageProducts
