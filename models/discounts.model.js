import { Schema, model } from 'mongoose'

const discountsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    discounts: [{
        name: {
            type: String,
        },
        amount: {
            type: Number
        }
    }],
    duration: {
        type: Date,
    }
}, { timestamps: true })

global.Discounts = global.Discounts || model("Discounts", discountsSchema)
export default global.Discounts