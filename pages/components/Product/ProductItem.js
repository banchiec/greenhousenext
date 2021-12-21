import { useEffect } from "react"
import CategoriesService from "../../../services/categories.service";


export default function ProductItem({ name, price, beloning, description, size, photos, colors, props }) {

    let categoryService = new CategoriesService()
    const { idCategory, subCategory } = beloning

    useEffect(() => {
        categoryService.
            getCategoryById(idCategory)
            .then((category) => {
                console.log(category.data)
            })
            .catch(err => console.log(err))

    }, [])


    return <>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
    </>
}
