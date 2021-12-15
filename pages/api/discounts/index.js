import connectDB from "../../../services/mongoose.services";
import Discount from '../../../models/discounts.model'

const allDiscounts = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const discounts = await Discount.find()
            return res.status(200).json(discounts)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(allDiscounts) 