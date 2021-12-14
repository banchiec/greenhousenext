import connectDB from "../../../services/mongoose.services";
import Product from '../../../models/product.model'


const newProduct = async (req, res) => {

    const { name } = req.body;
    console.log(product)

    if (req.method === 'POST') {
        if (!name) {
            const neoProduct = await Product.create(product)

        }
        // .then((product) => {
        //     return res.status(200).json(product)
        // })
        // .catch(err => {
        //     return res.status(500).json(err)
        // })
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(newProduct) 