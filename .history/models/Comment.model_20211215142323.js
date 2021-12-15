import { Schema, model } from "mongoose";

<<<<<<< HEAD:models/Review.model.js
const ReviewModel = new Schema({
=======
 

const CommentModel = new Schema({
>>>>>>> 851b56c0be54f059a70da944ca17dc1294dba410:models/Comment.model.js
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

<<<<<<< HEAD:models/Review.model.js
global.Review = global.Review || model("Comment", ReviewModel)
=======
global.Comment = global.Comment || model("Comment", CommentModel) 
>>>>>>> 851b56c0be54f059a70da944ca17dc1294dba410:models/Comment.model.js

export default global.Comment