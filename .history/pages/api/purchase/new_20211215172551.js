import connectDB from "../../../services/mongoose.services";
import Purchase from '../../../models/category.model'


const newPurchase = async (req, res) => {
    console.log(req.body)
    if (req.method === 'POST') {
        try {
            const newPurchase = await Purchase.create({ number, userId, productId, discounts, amount })
            return res.status(200).json(newPurchase)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(newPurchase) 