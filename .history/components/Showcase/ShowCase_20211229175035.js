
import React, { useState, useEffect } from "react" 
import Product from '../Product/Product';      
import ProductsService from './../../services/products.service'
import { StyledComponent } from "styled-components";
import { SizeButton } from "../Product/Product.styled";



export const ShowCase = (props) => {

    const productService = new ProductsService()

    const [productList, setProductList] = useState([]); 
    


    
    useEffect(() => {
        productService
            .getProducts()
            .then((products) => {
                console.log(typeof(products.data))
                setProductList(products.data)
            })
            .catch((err) => console.log("Error retreiving products", err))
    }, [])         




 

       




    return ( 
    
   


        productList ? (
            productList?.map((product, index) => {
                return (   
                    <>      
                      <Product key={index}  {...product}  />
                    </>
                )
            })
        ) : (
            <p>Loading</p>
        )
    )   

    
     
    

}



