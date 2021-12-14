import { Schema, model } from "mongoose";

 

const CommentModel = new Schema({
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


global.Comment = global.Comment || model("Comment", CommentModel) 

export default global.Comment