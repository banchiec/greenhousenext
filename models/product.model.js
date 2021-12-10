import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required:true 
    },
    price: {
        type: Number, 
        required: true
       
    },
    category: {
        type: String,
        enum: ['Vestidos', 'Lalkas'],
        required: true

    },  
    size: {
        type: String, 
        enum: ['XL', ''], 
        required: true
    }, 
    description: {
        type: String, 
        required: true  
    }, 
    photo: {
        type: String, 
        required: true
    }, 
    
})

global.Product = global.Product || model("Product", productSchema)
export default global.Product