import { useState } from "react"
import ProductsService from "../../services/products.service"

export const Collections = () => {
    const [products, setProducts] = useState()

    const productsService = new ProductsService()

    useEffect(() => {

    }, [])


    return (
        <div>
            <h1>Collections</h1>
        </div>
    )
}