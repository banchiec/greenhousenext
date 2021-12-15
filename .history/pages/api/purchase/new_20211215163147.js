import connectDB from "../../../services/mongoose.services";
import Category from '../../../models/category.model'


const handler = async (req, res) => {
    const { name, subCategory } = req.body

    if (req.method === 'POST') {
        try {
            const newCategory = await Category.create(req.body)
            return res.status(200).json(newCategory)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler) 