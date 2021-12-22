const { Schema, model } = require('mongoose')

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    favorites: [{
        type: Schema.Types.Object,
        ref: 'Product',
        default: []
    }]

}, { timestamps: true })

global.User = global.User || model("User", userSchema)
export default global.User