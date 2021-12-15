import connectDB from "../../../services/mongoose.services";
import Comment from '../../../models/Comment.model'

const handler = async (req, res) => {
    const { id } = req.query
    if (req.method === "DELETE") {
        const category = await Comment.findById(id)
        if (!category) {
            res.status(500).json("Comment not found")
        } else {
            const deleteComment = await Comment.deleteOne({ id })
            res.status(422).json('Remove comment', deleteComment)
        }
    } else {

        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler) 