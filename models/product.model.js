import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    beloning: {
        idCategory: {
            type: Schema.Types.ObjectId,
            ref: 'Category', 
        },
        subCategory: {
            type: String,
          
        }
    },
    description: {
        type: String, 
        required: true
       
    },
    size: [
        {
            type: String,
            default: ["XL, XXL, L, M"]
        }
    ],
    photos: [
        {
            url: {
                type: String, 
               
            },
            color: {
                type: String, 
               
            }
        }
    ],
    colors: [
        {
<<<<<<< HEAD
            type: String,
=======
            type: String, 
           
>>>>>>> 97e4cbbc34762e5b0272f3d2a8bbf4f8895f6af3
        }
    ],
}, { timestamps: true })

global.Product = global.Product || model("Product", productSchema)
export default global.Product