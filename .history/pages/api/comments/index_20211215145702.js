import Comment from "../../../models/Comment.model";
import connectDB from "../../../services/mongoose.services";

const allComents = async (req, res) => {

    const { userId } = req.body;

    if (req.method === 'GET') {
        const user = await Comment.findById(userId)
        Comment.find()
            .then((data) => {
                return res.status(200).json(data)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    } else {
        res.status(422).send('req_method_not_supported')
    }
}
export default connectDB(allComments)
