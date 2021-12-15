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
    timestamps: true
})

<<<<<<< HEAD:models/Review.model.js
global.Review = global.Review || model("Comment", ReviewModel)
=======
global.Comment = global.Comment || model("Comment", CommentModel)
>>>>>>> 851b56c0be54f059a70da944ca17dc1294dba410:models/Comment.model.js

export default global.Comment