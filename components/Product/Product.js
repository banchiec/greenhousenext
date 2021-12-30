import { useEffect, useState } from "react" 
import CategoriesService from './../../services/categories.service'
import { StyledComponent } from "styled-components"; 
import { Button } from "../Button/Button"; 
import { ButtonSize } from "../ButtonSize/ButtonSize";
import { Container, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper } from "./Product.styled"; 
import Image from 'next/image'
import { Gallery } from "../Gallery/Gallery"; 
import { Colors } from "../Colors/Colors";

 
const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
} 






export default function Product({name, beloning, size, price, description, photos, colors}) {
    let categoryService = new CategoriesService()
    const [category, setCategory] = useState([])                
    console.log(category)      
    const { idCategory, subCategory } = beloning   
     

    useEffect(() => {
        categoryService.
            getCategoryById(idCategory)
            .then((category) => {
                console.log(typeof (category.data))
                setCategory(category.data)
            })
            .catch(err => console.log(err))
    }, [])      
  
     

 
    return (
        <>
            <> 
                {
                    category ? (
                        <> 
                            <Container>
                                <Category>{category.name}<br /> {name} </Category> 
                                <Gallery   items={photos}/> 
                                 <div>
                                <SelectSizeTitle>SELECT  SIZE</SelectSizeTitle>
                                <ButtonWrapper> 
                                    <ButtonSize  buttons={size} ></ButtonSize>
                                </ButtonWrapper> 
                                <SelectColorTitle>SELECT COLOR </SelectColorTitle>  
                                <ButtonWrapper>
                                <Colors palitrs={colors} ></Colors>                               
                                </ButtonWrapper> 
                              
                                </div>  

                            </Container>
                        </>
                    ) : <p>Loading....</p>
                }
            </>
        </>
    )
}


