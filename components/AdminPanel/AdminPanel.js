import { ProductCreate } from "../ProductCreate/ProductCreate" 
import CategoriesServices from "../../services/categories.service"
import { useEffect, useState } from 'react' 


 export const AdminPanel = () => {   

   const [categories, setCategory] = useState([])     

   let categoriesService = new CategoriesServices()  

   const getAllCategories = async () => {
     await categoriesService
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


   
    



   return (
     <ProductCreate  categoriesList={categories}    ></ProductCreate>
   )

}