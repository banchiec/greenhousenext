/* eslint-disable @next/next/no-img-element */
import { ContainerProduct, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper } from "./ShowCaseItem.styled";
import { Gallery } from "../Gallery/Gallery";  
import { ButtonColors } from "../ButtonColors/ButtonColors"; 
import CategoriesServices from '../../services/categories.service'  
import { ButtonSize } from "../ButtonSize/ButtonSize";
import { ButtonCard } from "../ButtonCard/ButtonCard";
import { useEffect, useState } from "react"
import { AdminPanel } from "../AdminPanel/AdminPanel";

export default function ShowCaseItem({ name, beloning, size, price, description, photos, colors }) {
    
  
   

    const [category, setCategory] = useState([])  
    const [show, setShow] = useState(false)
    const [imageShow, setImageShow] = useState() 

    let categoryService = new CategoriesServices() 


  const  getCategories = async () => {

        await categoryService
            .getCategoryById(beloning?.idCategory)
            .then((data) => {
                setCategory(data?.data)
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }

    useEffect(() => {
        getCategories()
    }, [])  


   


    const onShow = (e) => {      
        console.log(e.target.name)
        setImageShow(e.target.name)
    }  
 
    

    const getFirstColor = (colors) => {
        return colors[0]
    }
 
    return ( 
       
           <>
        <ContainerProduct> 
            { 
                category ? (
                    <> 
                             
                        
                            <Category >{category.name}<br /> {name} </Category>  

                            <Gallery photos={photos} price={price}  isActive={imageShow} getFirstColor={colors[0]} />   
                        <div>
                            {/* <SelectSizeTitle>SELECT  SIZE</SelectSizeTitle> */}
                            {/* <ButtonWrapper>
                                <ButtonSize buttons={size} ></ButtonSize>
                            </ButtonWrapper> */} 
                            <ButtonSize buttons={size}></ButtonSize>                         
                            <ButtonColors palitrs={colors} onShow={onShow} ></ButtonColors>  
                                           
                        </div>
                    </>
                ) : <p>Loading....</p>
            }    
             
        </ContainerProduct>    
         
            <ButtonCard  ></ButtonCard>
            
          
        </>
        
    )
}


