
import React, { useState, useEffect } from "react"
import Product from '../ShowCaseItem/ShowCaseItem';
import ShowCaseItem from '../ShowCaseItem/ShowCaseItem'
import ProductsService from './../../services/products.service'
import { ContainerShowcase } from "./ShowCase.styled";
import { SizeButton } from "../ShowCaseItem/ShowCaseItem.styled";



export const ShowCase = (props) => {


    const [productList, setProductList] = useState([]);
    const productService = new ProductsService()

    const getProducts = async () => {

        await productService
            .getProducts()
            .then((products) => {
                setProductList(products?.data)
            })
            .catch((err) => console.log("Error retreiving products", err))
    }

    useEffect(() => {
        getProducts()
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



