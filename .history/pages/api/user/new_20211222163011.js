import User from '../../../models/user.model'
import connectDB from '../../../services/mongoose.services';

const newUser = (req, res) => {

    if (req.method === 'POST') {
        const { name, email, image, favorites } = req.body;
        User.findOne({ email })
            .then(user => {
                if (!user) {
                    User.create(req.body)
                        .then(data => {
                            return res.status(200).json(data)
                        })
                        .catch(err => {
                            return res.status(500).json({ err, message: "Error creating user" })
                        })
                }
                else {
                    return res.status(500).json({ error, messsage: "user exist" })
                }
            })
    }

}

export default connectDB(newUser)