import connectDB from "../../../services/mongoose.services"
import Product from '../../../models/product.model'

const newProduct = async (req, res) => {
    if (req.method === 'POST') {
        const { name } = req.body
        if (name) {
            try {
                // check is exist User
                const product = await Prodcut.findOne({ name })
                if (!product) {
                    const newProduct = new User(req.body)
                    await User
                        .create(newUser)
                        .then((data) => {
                            return res.status(200).json(data)
                        })
                        .catch((error) => {
                            return res.status(500).json(error)
                        })
                }
                else {
                    return res.status(500).json("Usuario ya registrado")
                }

            } catch (error) {
                return res.status(500).json(error)
            }
        } else {
            res.status(422).json('data_imcomplete')
        }
    }
    else {
        res.status(422).send('req_method_not_supported')
    }
}
export default connectDB(newProduct)