import { Schema, model } from "mongoose";

const commentModel = new Schema({
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
    timestamps: tre
})

global.Comment = global.Comment || model("Comment", commentModel)

export default global.Comment