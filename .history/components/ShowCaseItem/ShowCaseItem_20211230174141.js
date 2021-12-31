import { ContainerProduct, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper } from "./ShowCaseItem.styled";

import { Gallery } from "../Gallery/Gallery";
import { ButtonColors } from "../Colors/ButtonColors";

import CategoriesServices from '../../services/categories.service'
import { useEffect, useState } from "react"

export default function ShowCaseItem({ name, beloning, size, price, description, photos, colors }) {

    const [category, setCategory] = useState([])
    const [show, setShow] = useState(false)

    const { idCategory, subCategory } = beloning

    let categoryService = new CategoriesServices()

    const getCategories = async () => {

        await categoryService
            .getCategoryById(idCategory)
            .then((data) => {
                setCategory(data?.data)
            })
            .catch((err) => {
                console.log("error")
            }
            )
    }

    useEffect(() => {
        getCategories()
    }, [])


    const onShow = () => {
        console.log("show")
        // setShow(!show)
    }

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
                            <ButtonColors palitrs={colors}   ></ButtonColors>
                        </div>

                    </>
                ) : <p>Loading....</p>
            }
        </ContainerProduct>
    )
}


