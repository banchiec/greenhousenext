import Comment from "../../../models/Comment.model";
import connectDB from "../../../services/mongoose.services";

const Comment = (req, res) => {
    const review = req.body;
    console.log(review);
    if (req.method === 'POST') {
        Review.create(review)
            .then((review) => {
                return res.status(200).json(review)
            }).catch(err => {
                return res.status(500).json(err)
            })
    } else if (req.method === 'GET') {
        Review.find()
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


export default connectDB(Comment)
