import connectDB from "../../../services/mongoose.services";
import Purchase from '../../../models/purchase.model'

const handler = async (req, res) => {
    const { id } = req.query
    const { number, userId, productId, discounts, amount } = req.body
    if (req.method === 'GET') {
        try {
            const purchase = await Purchase.findById(id)
            return !purchase ?
                res.status(402).json("Purchase not found") :
                res.status(200).json(purchase)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else if (req.method === "DELETE") {
        const purchase = await Purchase.findById(id)
        if (!purchase) {
            res.status(500).json("user not found")
        } else {
            const deletePurchase = await Purchase.deleteOne({ id })
            res.status(422).json('Remove purchase', deletePurchase)
        }
    } else if (req.method === "PUT") {
        try {
            console.log(id)
            const updatePurchase = await Purchase.findByIdAndUpdate(id, { name, subPurchase })
            return !updatePurchase ?
                res.status(402).json("Purchase not update") :
                res.status(200).json(updatePurchase)
        } catch (error) {
            res.status(500).json("Purchase not found")
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler) 