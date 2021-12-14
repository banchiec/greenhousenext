import connectDB from "../../../services/mongoose.services";
import Category from '../../../models/category.model'


const handler = (req, res) => {
    const product = req.body;
    if (req.method === 'POST') {
        Product.create(product)
            .then((product) => {
                return res.status(200).json(product)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }
    else if (req.method === 'GET') {
        Product.find()
            .then((product) => {
                return res.status(200).json(product)
            })
            .catch(err => {
                return res.status(500).json(err)
            })

    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler) 