
import { useState } from 'react'
import ProductsService from '../../services/products.service'  
import { StyledFormWrapper,StyledForm, StyledInput, StyledButton,  } from './ProductForm.styled'
import { Categories } from '../Categories/Categories'
import { MultiSelect } from "react-multi-select-component";


 export   const ProductForm = (props) => {   

     
       
 
  
     const [selected, setSelected] = useState([]);
 
    const [form, setForm] = useState({
        name: "", 
        price: "", 
        description: "", 
        photos: {
            url: "",  
            color: ""
        },     
       beloning: {
           idCategory: ""
       }
     
    })  

 let productService = new ProductsService() 
      
   
     


    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   


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
                 },     
                 beloning: {
                     idCategory: ""
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
                    <StyledInput
                        type="text"
                        name="idCategory"
                        value={form.beloning.idCategory}
                        onChange={(e) => handleChange(e)}
                    />   
                    
                                
                    <StyledButton type='submit'>Crear producto</StyledButton>
                </StyledForm> 
                 
        </StyledFormWrapper>
        </>
    ) 
}