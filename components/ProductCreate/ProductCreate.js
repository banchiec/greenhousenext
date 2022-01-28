
import ProductsService from '../../services/products.service'  
import { StyledFormWrapper,StyledForm, StyledInput, StyledButton,  } from './ProductCreate.styled' 
import { Categories } from '../Categories/Categories'
import Select from 'react-select';
import { useEffect, useState } from 'react' 


 export   const ProductCreate = (props) => {    
 
        
    const [form, setForm] = useState({
        name: "", 
        price: "", 
        description: "",  
        size: "", 
       beloning: {
           idCategory: "", 
           subCategory: ""
       }
    })  

 let productService = new ProductsService()   

 
 
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value , beloning: {
        idCategory: e.target.value
    } });
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
                 size: "", 
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
                    <label htmlFor="size">Size</label>
                    <StyledInput
                        type="text"
                        name="size"
                        value={form.size}
                        onChange={(e) => handleChange(e)}
                    />   
                    <label htmlFor="idCategory">Name category</label>
                    

                    <select multiple onChange={(e) => handleChange(e)}
                        className="custom-select"
                        id="inputGroupSelect" 
                        name="idCategory"

                    >
                       {
                           props.categoriesList?.map((elm) => { 
                               return( 
                                   <>
                                   <option  value={elm._id}>{elm.name}</option> 
                                   </>
                               )
                           })
                       }
                    </select>
                  
                    
                    <StyledButton type='submit'>Crear producto</StyledButton>
                </StyledForm>  

                
                 
        </StyledFormWrapper>
        </>
    ) 
}