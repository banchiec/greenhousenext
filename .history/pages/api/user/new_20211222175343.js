import User from '../../../models/user.model'
import connectDB from '../../../services/mongoose.services';

const newUser = async (req, res) => {

    if (req.method === 'POST') {
        const user = req.body
        console.log(user)
        const { name, email, image, favorites } = req.body;
        await User.findOne({ email })
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
                    return res.status(500).json({ messsage: "user exist" })
                }
            })
    }
}

export default connectDB(newUser)