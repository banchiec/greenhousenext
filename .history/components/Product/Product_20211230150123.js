import { useEffect, useState } from "react"
import CategoriesService from './../../services/categories.service'
import { Button } from "../Button/Button";
import { ButtonSize } from "../ButtonSize/ButtonSize";
import { Container, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper } from "./Product.styled";
import Image from 'next/image'
import { Gallery } from "../Gallery/Gallery";


const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Product({ name, beloning, size, price, description, photos, colors }) {
    let categoryService = new CategoriesService()
    const [category, setCategory] = useState([])
    const [active, setActive] = useState("false");
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


    const button = ((e) => {
        console.log(e)
    })





    return (
<<<<<<< HEAD:components/Product/Product.js
        <>   

            <> 
                {
                    category ? (
                        <>
                            <Container >
                                <Category>{category.name}<br /> {name} </Category> 
                                <Gallery   items={photos}/> 
                                 <div>
=======
        <>
            <>



                {
                    category ? (
                        <>
                            <Container>

                                <Category>{category.name}<br /> {name} </Category>
                                <Gallery items={photos} />
>>>>>>> 0ebf3aad356ab812ff31bbff7f5f8acec9594cad:.history/components/Product/Product_20211230150123.js
                                <SelectSizeTitle>SELECT  SIZE</SelectSizeTitle>
                                <ButtonWrapper>
                                    <ButtonSize items={size} ></ButtonSize>

                                </ButtonWrapper>

                                <SelectColorTitle>SELECT COLOR </SelectColorTitle>
                                <ButtonWrapper>
                                    {colors.map((item, i) => {
                                        return (
                                            <>
                                                <Button onClick={button} primary style={{ backgroundColor: `${item}` }} key={i} name={item} ></Button>
                                            </>
                                        )
                                    })}
                                </ButtonWrapper>

                            </Container>
                        </>
                    ) : <p>Loading....</p>
                }
            </>
        </>
    )
}


