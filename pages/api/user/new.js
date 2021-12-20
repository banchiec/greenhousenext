
import User from '../../../models/user.model'
import connectDB from '../../../services/mongoose.services';
 

const newUser = (req, res) => {    
    
    if (req.method === 'POST') {
        const { name, email, password, favorites } = req.body; 
        console.log(req.body)
        User.findOne({ email })
            .then(user => {
                if (!user) {
                    User.create({ name, email, password, favorites})
                        .then(data => {
                            return res.status(200).json(data)
                        })
                        .catch(err => {
                            return res.status(500).json({ err, message: "Error creating user" })
                        })
                }
            })
    }

}  

export default connectDB(newUser)