import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    beloning: {
        idCategory: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true

        },
        subCategory: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true,
    },
    size: [
        {
            type: String,
            required: true,
            default: ["XL, XXL, L, M"]
        }
    ],
    photos: [
        {

            url: {
                type: String,
                default: "alexei.jpg",
                required: true
            },
            color: {
                type: String,
                required: true
            }
        }
    ]
    // colors: [
    //     {
    //         type: String,
    //         required: true,
    //     }
    // ],
}, { timestamps: true })

global.Product = global.Product || model("Product", productSchema)
export default global.Product