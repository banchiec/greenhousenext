import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'
// const bcrypt = require("bcryptjs");

const newUser = (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password, favorites } = req.body
    User.findOne({ email })
      .then(user => {
        if (!user) {
          User.create({ name, email, password, favorites })
            .then(data => {
              return res.status(200).json(data)
            })
            .catch(err => {
              return res.status(500, message).json({ err, message: "Error creating user" })
            })
        } else {
          return res.status(500).json({ error)
        }
      })
  } else {
    res.status(402).json("Method not supported")
  }
}

export default connectDB(newUser)
// Async await  



