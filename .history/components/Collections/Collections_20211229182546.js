import { useState, useEffect } from "react"
import Link from 'next/link'
import ProductsService from "../../services/products.service"
import { CollectionItem } from "./CollectionItem/CollectionItem"

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
            {
                <CollectionItem />
            }

        </section>
    )
}