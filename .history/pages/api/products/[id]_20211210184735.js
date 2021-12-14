import connectDB from "../../../services/mongoose.services";
import Product from '../../../models/product.model'

const handler = async (req, res) => {
    const { id } = req.query
    const { name } = req.body
    if (req.method === 'GET') {
        try {
            const product = await Product.findById(id)
            return !product ?
                res.status(402).json("Category not found") :
                res.status(200).json(product)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else if (req.method === "DELETE") {
        const product = await Product.findById(id)
        if (!product) {
            res.status(500).json("user not found")
        } else {
            const deleteCategory = await Category.deleteOne({ id })
            res.status(422).json('Remove category', deleteCategory)
        }
    } else if (req.method === "PUT") {
        try {
            console.log(id)
            const updateCategory = await Category.findByIdAndUpdate(id, { name, subCategory })
            return !updateCategory ?
                res.status(402).json("Category not update") :
                res.status(200).json(updateCategory)
        } catch (error) {
            res.status(500).json("Category not found")
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler)