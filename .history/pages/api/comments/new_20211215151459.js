import Comment from "../../../models/Comment.model";
import connectDB from "../../../services/mongoose.services";


const newComment = async (req, res) => {
  const { userId } = req.body;
  if (req.method === 'POST') {
    const user = await Comment.findById(userId)
    if (user) {
      Comment.create(req.body)
        .then((data) => {
          return res.status(200).json(data)
        }).catch((error) => {
          return res.status(500).json(error)
        })
    } else {
      return res.status(500).json("User not found")
    }
  }
}


export default connectDB(newComment)
