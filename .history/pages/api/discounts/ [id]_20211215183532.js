import connectDB from "../../../services/mongoose.services";
import Discount from '../../../models/category.model'

const categoryDetails = async (req, res) => {
    const { id } = req.query
    const { name, discounts, duration } = req.body
    if (req.method === 'GET') {
        try {
            const category = await Discount.findById(id)
            return !category ?
                res.status(402).json("Discount not found") :
                res.status(200).json(category)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else if (req.method === "DELETE") {
        const category = await Discount.findById(id)
        if (!category) {
            res.status(500).json("user not found")
        } else {
            const deleteDiscount = await Discount.deleteOne({ id })
            res.status(422).json('Remove category', deleteDiscount)
        }
    } else if (req.method === "PUT") {
        try {
            console.log(id)
            const updateDiscount = await Discount.findByIdAndUpdate(id, { name, subDiscount })
            return !updateDiscount ?
                res.status(402).json("Discount not update") :
                res.status(200).json(updateDiscount)
        } catch (error) {
            res.status(500).json("Discount not found")
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}
export default connectDB(categoryDetails) 