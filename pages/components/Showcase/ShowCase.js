import ProductsService from "../../../services/products.service"
import React, { useState, useEffect } from "react"
import ProductItem from "../Product/ProductItem"


export const ShowCase = () => {

    const productService = new ProductsService()

    const [productList, setProductList] = useState([])


    useEffect(() => {
        productService
            .getProducts()
            .then((products) => {
                console.log(products.data)
                setProductList(products.data)
            })
            .catch((err) => console.log("Error retreiving products", err))
    }, [])

    return (
        productList ? (
            productList.map((product, i) => {
                return (
                    <ProductItem key={i} {...product} />
                )
            })
        ) : (
            <p>Loading</p>
        )
    )

}




