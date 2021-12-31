import { useState, useEffect } from "react"
import Link from 'next/link'
import CategoriesService from "../../services/categories.service"
import ProductsService from "../../services/products.service"
import { CollectionItem } from "./CollectionItem/CollectionItem.1"

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
        <section>
            {
                categories?.map((category) => {
                    return (
                        <CollectionItem key={category._id} category={category} />
                    )
                })
            }

        </section>
    )
}