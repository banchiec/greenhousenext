import Comment from "../../../models/Comment.model";
import connectDB from "../../../services/mongoose.services";


const Handler = async (req, res) => {
  const { userId } = req.body;
  if (req.method === 'POST') {

    const user = await Comment.findById(userId)
    Comment.create(req.body)
      .then((data) => {
        return res.status(200).json(data)
      }).catch(error => {
        return res.status(500).json(error)
      })
  }
}


export default connectDB(Handler)
