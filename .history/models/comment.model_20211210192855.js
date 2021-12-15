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

global.Comment = global.Review || model("Comment", commentModel)

export default global.Comment