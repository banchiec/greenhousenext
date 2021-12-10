
import Product from "../../../models/product.model";
import connectDB from "../../../services/mongoose.services";

const IdProduct = (req, res) => { 
   
    const  {id}  = req.query; 
    console.log(id)
    const query = req.body; 
    console.log(query)
     if(req.method === "PUT"){ 
       return  Product  
            .findByIdAndUpdate(id, query, {new: true})
           .then(product => {
               return  res.status(200).json(product)
           }) 
           .catch(err => res.status(500).json(err))
     }else if(req.method === "DELETE"){ 
         Product.findByIdAndDelete(id) 
          .then((product) => {
              res.status(200).json({product, message: 'Succesfully deleting product'}, err)
          }) 
          .catch(err => res.status(500).json({code: 500, message: 'Error deleting product'}, err))
     }
}  


export default connectDB(IdProduct) 




