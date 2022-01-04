import React from 'react'  
import { useState } from 'react'
import ProductsService from './../../services/products.service' 



 export  const ProductForm = () => {
     
    const [form, setForm] = useState("") 
     
 
    const clearState = () => {
        setForm("")
    }  

    const handleChange = (e) => {
        const {value, name} =  e.target;  
        console.log(e)
        setForm(form => [...form, 'somedata']) 
    } 

    return(
        <h1 onClick={handleChange}>Hello World</h1>
    ) 
}