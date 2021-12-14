const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subCategory: [{
        type: String,
        required: true
    }],
}, { timestamps: true })

global.Category = global.Category || model("Category", userSchema)
export default global.User