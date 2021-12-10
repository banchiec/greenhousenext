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
            // array de string indicando las categorias
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
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
            enum: [xs, x, m, l, xl],
            require: true
        }
    ],
    photos: [
        {
            type: String,
            default: "alexei.png",
            require: true
        }
    ],
    colors: [
        {
            type: String,
            require: true
        }
    ],

}, { timestamps: true })

global.Product = global.Product || model("Product", productSchema)
export default global.Product