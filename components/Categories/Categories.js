  
  import CategoriesServices from "../../services/categories.service" 
  import { useState, useEffect } from "react"   
 import Select from 'react-select'

 export const Categories = () => {
      
   const [categories, setCategory] = useState([])    
   
   let categoriesService = new CategoriesServices()
 
   const getAllCategories = async() => {
        await  categoriesService  
         .getCategories()
         .then((data) => { 
             setCategory(data?.data)
             console.log(data.data)
         }) 
         .catch(err => console.log(err))
   } 

   useEffect(() => {
       getAllCategories()
   }, []) 
  


   return( 
      <>    

          <Select   options={categories.map((elm) => {
              return {
                  value: elm._id, 
                  label: elm._id
              }
          })}/>
      </>
   )


   
 

}