
import React, { useState, useEffect } from "react"
import Product from '../ShowCaseItem/ShowCaseItem';
import ShowCaseItem from '../ShowCaseItem/ShowCaseItem'
import ProductsService from './../../services/products.service'
import { ContainerShowcase } from "./ShowCase.styled";
import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled";



export const ShowCase = (props) => {

    const productService = new ProductsService()

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        productService
            .getProducts()
            .then((products) => {
                console.log(typeof (products.data))
                setProductList(products.data)
            })
            .catch((err) => console.log("Error retreiving products", err))
    }, [])


    return (
        <ContainerShowcase>
            {
                productList ? (
                    productList?.map((product, index) => {
                        return (
                            <ShowCaseItem key={index}  {...product} />
                        )
                    })
                ) : (
                    <p>Loading</p>
                )
            }
        </ContainerShowcase>
    )
}



