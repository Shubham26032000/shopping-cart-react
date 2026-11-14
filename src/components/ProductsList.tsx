





import { ProductCard } from "../components/ProductCard"
//import { productsData } from "../data/productsdata"
import { type IProduct } from "../types"


import { useProduct } from "../hooks/useProduct"


export function ProductsList() {
    let { products } = useProduct()


    return <>
        <h3>List of Products</h3>
        <div style={{display:'flex', gap: '15px', flexWrap:'wrap'}}>
            { products.map((app_product:IProduct) => {
                return <ProductCard key={app_product.id} product={app_product} />
            })}
        </div>
    </>
}
