import { useState } from "react"
import ProductsService from "../../services/products.service"

export const Collections = () => {
    const [products, setProducts] = useState()

    const productsService = new ProductsService()

    const getProducts = () => {
        productsService.getProducts()
            .then((data) => {
                console.log(data)

            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        getProducts()

    }, [])


    return (
        <div>
            <h1>Collections</h1>
        </div>
    )
}