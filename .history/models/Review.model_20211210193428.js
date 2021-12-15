import { Schema, model } from "mongoose";

const ReviewModel = new Schema({
    product: {
        type: String,
        ref: "Product"
    },
    rating: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: String,
        ref: 'User'
    }
}, {
    timestamps: true
})

global.Review = global.Review || model("Comment", ReviewModel)

export default global.Review