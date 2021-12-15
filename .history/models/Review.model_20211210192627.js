import { Schema, model } from "mongoose";

const commentModel = new Schema({
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

global.Comments = global.Review || model("Review", commentModel)

export default global.Comments