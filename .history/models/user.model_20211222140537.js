const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    favorites: [{
        type: Schema.Types.Object,
        ref: 'Product'
    }]
}, { timestamps: true })

global.User = global.User || model("User", userSchema)
export default global.User