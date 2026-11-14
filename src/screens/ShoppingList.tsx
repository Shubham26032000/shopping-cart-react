import { ProductsList } from "../components/ProductsList"
import { CartItems } from "../components/CartItems"


function ShoppingList() {
    return <>
        <h2>Shopping List</h2>
        <div className="grid-container">
            <div>
                <ProductsList />
            </div>
            <div>
                <CartItems />
            </div>
        </div>
    </>
}


export default ShoppingList
