import { useEffect, useState } from "react"
import CategoriesService from './../../services/categories.service'
import { Button } from "../Button/Button";
import { ButtonSize } from "../ButtonSize/ButtonSize";
import { Container, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper } from "./Product.styled";
import Image from 'next/image'
import { Gallery } from "../Gallery/Gallery";
import { Colors } from "../Colors/Colors";

export default function Product({ name, beloning, size, price, description, photos, colors }) {

    const [category, setCategory] = useState([])

    const { idCategory, subCategory } = beloning
    console.log(category)
    let categoryService = new CategoriesService()


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
                                <Gallery items={photos} />
                                <div>
                                    <SelectSizeTitle>SELECT  SIZE</SelectSizeTitle>
                                    <ButtonWrapper>
                                        <ButtonSize buttons={size} ></ButtonSize>
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


