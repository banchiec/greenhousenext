import { Schema, model } from 'mongoose'

const purchaseSchema = new Schema({
    numberBuy: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    discounts: [{
        type: Schema.Types.ObjectId,
        ref: "Discount"
    }],
    amount: {
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