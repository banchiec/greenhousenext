import connectDB from "../../../services/mongoose.services";
import Discount from '../../../models/discounts.model'

const newDiscount = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const newDiscount = await Discount.create(req.body)
            return res.status(200).json(newDiscount)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(newDiscount) 