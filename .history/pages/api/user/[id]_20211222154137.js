import User from '../../../models/user.model'
import connectDB from '../../../services/mongoose.services';

const getUserData = (req, res) => {
    const data = req.body
    const { name, email, image, role, favorites } = req.body
    const { id } = req.query;
    if (req.method === 'GET') {
        User.findById(id)
            .then(user => {
                res.status(200).json(user);
            })
    } else if (req.method === "PUT") {
        const { name, email, image, role, favorites } = req.body
        console.log(req.body)
        User.findByIdAndUpdate(id, { name, email, image, role, favorites })
            .then((favorites) => {
                res.status(200).json({ favorites, message: `Favorites ${id} added` })
            })
            .catch(err => res.status(500).json({ code: 500, message: "Can't add favorite", err }))
    }
}



export default connectDB(getUserData)


