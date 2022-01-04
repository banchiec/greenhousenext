import React from 'react'  
import { useState } from 'react'
import ProductsService from '../../services/products.service'

import { StyledFormWrapper,StyledForm, StyledInput, StyledButton,  } from './ProductForm.styled'




 export  const ProductForm = () => {
     
    const [form, setForm] = useState({
        name: "", 
        price: "", 
        description: "", 
        photos: {
            url: "",  
            color: ""
        }
    })  

 let productService = new ProductsService() 
      
 

    const handleChange = (e) => {
        const {value, name} =  e.target;  
        console.log(e) 
        setForm({ 
            ...form, 
            [name]: value
        })
       
    }   

 


    const handleSubmit = (e) => { 
        e.preventDefault()
        productService
            .createProduct(form)   
         .then(() => {
             setForm({
                 name: "", 
                 price: "", 
                 description: "",  
                 photos: {
                     url: "", 
                     color: ""
                 }
                 
             })
         }) 
         .catch(err => console.log(err))   
    }

    return(
        <>  
        <StyledFormWrapper>
                <StyledForm onSubmit={(e) => handleSubmit(e)}>
                    <h2>Crear nuevo producto</h2>
                    <label htmlFor="name">Nombre</label>
                    <StyledInput
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="price">Precio</label>
                    <StyledInput
                        type="text"
                        name="price"
                        value={form.price}
                       onChange={(e) => handleChange(e)}
                    /> 
                    <label htmlFor="email">Descripcíon</label>
                    <StyledInput
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={(e) => handleChange(e)}
                    />   
                    
                    <label htmlFor="url">Select photo</label>
                    <StyledInput
                        type="file"
                        name="url"
                        value={form.photos.url}
                        onChange={(e) => handleChange(e)}
                    />             
                    <StyledButton type='submit'>Crear producto</StyledButton>
                </StyledForm>  
        </StyledFormWrapper>
        </>
    ) 
}