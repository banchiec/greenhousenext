import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

const newUser =  (req, res) => {
  if(req.method === 'POST'){
    const {name, email, password} = req.body; 
    User.findOne({email}) 
     .then(user => {
       if(!user){
         User.create({name, email, password})
         .then(data => {
           return res.status(200).json(data)
         }) 
         .catch(err => {
           return res.status(500, message).json({err, message: "Error creating user"})
         })
       }else{
         return res.status(500, message).json({err, message: "Error creating "})
       }
     })
  }else if(req.method === "GET"){
    User.find() 
    .then(user => {
      return res.status(200).json({user, message:"Succesfully  getting users"})
    }) 
    .catch(err => {
      return res.status(500).json({err, message: "Cannot get user"})
    })
  }
} 

// Async await  


