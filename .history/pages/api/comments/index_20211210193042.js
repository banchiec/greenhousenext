import connectDB from "../../../services/mongoose.services";
import Comment from '../../../models/comment.model.js'


const handler = (req, res) => {
    const comment = req.body;
    console.log(comment);
    if (req.method === 'POST') {
        Comment.create(comment)
            .then((data) => {
                return res.status(200).json(data)
            }).catch(err => {
                return res.status(500).json(err)
            })
    } else if (req.method === 'GET') {
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


export default connectDB(handler)
