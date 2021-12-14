// Next.js API route support: https://nextjs.org/docs/api-routes/introduction  
import connectDB from "../../../services/mongoose.services";
import Product from '../../../models/product.model'

import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: String
}


const newProduct = (req: NextApiRequest, res: NextApiResponse<Data>) => {



  const product = req.body;
  console.log(product)

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
  }
}

export default connectDB(newProduct) 