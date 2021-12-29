import { useState, useEffect } from "react"
import Link from 'next/link'
import CategoriesService from "../../services/categories.service"
import ProductsService from "../../services/products.service"
import { CollectionItem } from "./CollectionItem/CollectionItem"

export const Collections = () => {
    const [categories, setCategories] = useState()

    const categoriesService = new CategoriesService()

    const getCategories = () => {
        categoriesService.getCategories()
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <section>
            {
                <CollectionItem />
            }

        </section>
    )
}