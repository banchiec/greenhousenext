import Comment from "../../../models/Comment.model";
import connectDB from "../../../services/mongoose.services";

const allComents = async (req, res) => {

    const { userId } = req.body;

    if (req.method === 'GET') {
        const user = await Comment.findById(userId)
        if (!userId) {
            return res.status(500).json("User not found, you need register")
        } else {
            const allComment = await Comment.find()
            return res.status(200).json(allComment)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}
export default connectDB(allComments)
