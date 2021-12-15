import connectDB from "../../../services/mongoose.services";
import Comment from '../../../models/comment.model.js'


const handler = (req, res) => {
    const review = req.body;
    console.log(review);
    if (req.method === 'POST') {
        Comment.create(review)
            .then((review) => {
                return res.status(200).json(review)
            }).catch(err => {
                return res.status(500).json(err)
            })
    } else if (req.method === 'GET') {
        Comment.find()
            .then((review) => {
                return res.status(200).json(review)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    } else {
        res.status(422).send('req_method_not_supported')
    }
}


export default connectDB(handler)
