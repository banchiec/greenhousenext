import { Schema, model } from 'mongoose'

const purchaseSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    productId: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    }],
    discounts: [{
        name: {
            type: number,
            ref: "Discount"

        },
        amount: {

        }

    }],
    amount: {
        type: Number,
        required: true
    }
}, { timestamps: true })

global.Purchase = global.Purchase || model("Purchase", purchaseSchema)
export default global.Purchase