import connectDB from "../../../services/mongoose.services";
import Category from '../../../models/category.model'

const allCategories = async (req, res) => {
    if (req.method === 'GET') {
        console.log('GET')
        try {
            const categories = Category.find()
            console.log(allCategory)
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(allCategories) 