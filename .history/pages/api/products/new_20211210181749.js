import connectDB from "../../../services/mongoose.services"
import Product from '../../../models/product.model'

const newProduct = async (req, res) => {
    if (req.method === 'POST') {
        const { name } = req.body
        console.log(name)
        if (name) {
            try {
                // check is exist User
                const product = await Product.findOne({ name })
                if (!product) {
                    const newProduct = new Product(req.body)
                    // console.log(newProduct)
                    await Product
                        .create(Product)
                        .then((data) => {
                            return res.status(200).json(data)
                        })
                        .catch((error) => {
                            return res.status(500).json(error)
                        })
                }
                else {
                    return res.status(500).json("Producto ya registrado")
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