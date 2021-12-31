import { useEffect, useState } from "react"
import CategoriesServices from '../../services/categories.service'
import { Button } from "../Button/Button";
import { ButtonSize } from "../ButtonSize/ButtonSize";
import { ContainerProduct, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper } from "./ShowCaseItem.styled";

import Image from 'next/image'
import { Gallery } from "../Gallery/Gallery";
import { Colors } from "../Colors/Colors";

export default function ShowCaseItem({ name, beloning, size, price, description, photos, colors }) {

    const [category, setCategory] = useState([])

    const { idCategory, subCategory } = beloning
    console.log(idCategory)

    let categoryService = new CategoriesServices()

    const getCategories = async () => {
        await categoryService.
            getCategoryById(idCategory)
            .then((data) => {
                console.log(data)
                // setCategory(data?.data)
            })
            .catch(err =>
                console.log("error")
            )
    }

    useEffect(() => {
        getCategories()
    }, [])




    return (
        <ContainerProduct>
            {
                category ? (
                    <>
                        <div>
                            <Category>{category.name}<br /> {name} </Category>

                        </div>

                        <Gallery photos={photos} />
                        <div>
                            {/* <SelectSizeTitle>SELECT  SIZE</SelectSizeTitle> */}
                            {/* <ButtonWrapper>
                                <ButtonSize buttons={size} ></ButtonSize>
                            </ButtonWrapper> */}
                            <SelectColorTitle>SELECT COLOR </SelectColorTitle>
                            <ButtonWrapper>
                                <Colors palitrs={colors} ></Colors>
                            </ButtonWrapper>

                        </div>

                    </>
                ) : <p>Loading....</p>
            }
        </ContainerProduct>
    )
}


