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
<<<<<<< HEAD
            ref: 'Category',
        },
        subCategory: {
            type: String,

        }
    },
    description: {
        type: String,
        required: true

=======
            ref: 'Category', 
        },
        subCategory: {
            type: String,
          
        }
    },
    description: {
        type: String, 
        required: true
       
>>>>>>> develp
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
<<<<<<< HEAD
                type: String,

            },
            color: {
                type: String,

=======
                type: String, 
               
            },
            color: {
                type: String, 
               
>>>>>>> develp
            }
        }
    ],
    colors: [
        {
<<<<<<< HEAD
            type: String,
<<<<<<< HEAD

=======
=======
            type: String, 
           
>>>>>>> 97e4cbbc34762e5b0272f3d2a8bbf4f8895f6af3
>>>>>>> develp
        }
    ],
}, { timestamps: true })

global.Product = global.Product || model("Product", productSchema)
export default global.Product