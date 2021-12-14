import connectDB from "../../../services/mongoose.services";
import Category from '../../../models/category.model'


const handler = async (req, res) => {

    if (req.method === 'POST') {
        // try {
        //     const allCategory = Category.()
        //     return res.status(200).json(allCategory)
        // } catch (error) {
        //     return res.status(500).json(error)
        // }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler) 