import { useState, useEffect } from "react"
import ProductsService from "../../services/products.service"

export const Collections = () => {
    const [products, setProducts] = useState()

    const productsService = new ProductsService()

    const getProducts = () => {
        productsService.getProducts()
            .then((res) => {
                setProducts(res.data)
            })
            .catch((error) => {

            })
    }
    console.log(products)

    useEffect(() => {
        getProducts()

    }, [])


    return (
        <section>
            <h1>Collections</h1>
        </section>
    )
}