import connectDB from "../../../services/mongoose.services";
import Category from '../../../models/category.model'

const categoryDetails = async (req, res) => {
    const { id } = req.query
    if (req.method === 'GET') {
        try {
            const category = await Category.findbyId({ id })
            console.log(category)
            return !category ? res.status(402).json("Category not found") : res.status(200).json(category)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(categoryDetails) 