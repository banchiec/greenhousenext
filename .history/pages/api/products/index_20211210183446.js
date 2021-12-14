import connectDB from "../../../services/mongoose.services"
import Product from '../../../models/product.model'

const newProduct = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const products = await Product.find()
      if (products) {
        return res.status(200).json(products)
      }
      else {
        return res.status(500).json("Lista vacia")
      }
    }
    catch (error) {
      return res.status(500).json(error)
    }
  }
  else {
    res.status(422).send('req_method_not_supported')
  }
}
export default connectDB(newProduct)