const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    favorites: {
        name: {
            type: Schema.Types.ObjectId,
            required: true
        }
    },
}, { timestamps: true })

global.User = global.User || model("User", userSchema)
export default global.User