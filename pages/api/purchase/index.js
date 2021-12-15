import connectDB from "../../../services/mongoose.services";
import Purchase from '../../../models/purchase.model'

const allPurchases = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const purchases = await Purchase.find()
            return res.status(200).json(purchases)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(allPurchases) 