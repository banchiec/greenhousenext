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
            required: true
            

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
                required: true
            },
            color: {
                type: String, 
                required: true
            }
        }
    ],
    colors: [
        {
            type: String, 
            required: true
        }
    ],
}, { timestamps: true })

global.Product = global.Product || model("Product", productSchema)
export default global.Product