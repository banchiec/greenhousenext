import { Schema, model } from 'mongoose'

const purchaseSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    rating: {
        type: String
    },
    description: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
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
            require: true
        }
    ],
    photos: [
        {
            type: String,
            default: "alexei.jpg",
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

global.Purchase = global.Product || model("Purchase", purchaseSchema)
export default global.Purchase