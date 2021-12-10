import { Schema, model } from "mongoose";
import connectDB from "../services/mongoose.services"; 
 

const CommentModel = new Schema({
    product: {
        type: Schema.Types.ObjectId, 
        ref: "Product"
    }, 
    rating: {
        type: String
    }, 
    description: {
        type: String
    }
}) 


global.Comment = global.Comment || model("Comment", commentModel)