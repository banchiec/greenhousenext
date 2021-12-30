import { useState, useEffect } from "react"
import CategoriesService from "../../services/categories.service"
import { CollectionItem } from "./CollectionItem/CollectionItem"
import { ContainerCollection } from "./Collections.styled"

export const Collections = () => {
    const [categories, setCategories] = useState()

    const categoriesService = new CategoriesService()

    const getCategories = () => {
        categoriesService.getCategories()
            .then((res) => {
                setCategories(res.data)
            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        getCategories()
    }, [])


    console.log(categories)

    return (
        <ContainerCollection>
            {
                categories?.map((category) => {
                    return (
                        <CollectionItem key={category._id} category={category} />
                    )
                })
            }

        </ContainerCollection>
    )
}