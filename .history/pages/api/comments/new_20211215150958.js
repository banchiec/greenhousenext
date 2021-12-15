import Comment from "../../../models/Comment.model";
import connectDB from "../../../services/mongoose.services";


const Handler = (req, res) => {
  const comment = req.body;
  if (req.method === 'POST') {
    Comment.create(review)
      .then((review) => {
        return res.status(200).json(review)
      }).catch(err => {
        return res.status(500).json(err)
      })
  }
}


export default connectDB(Handler)
