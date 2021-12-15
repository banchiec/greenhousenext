import connectDB from "../../../services/mongoose.services";
import Comment from '../../../models/Comment.model'

const handler = async (req, res) => {
    const { id } = req.query
    if (req.method === "DELETE") {
        const category = await Category.findById(id)
        if (!category) {
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

export default connectDB(categoryDetails) 