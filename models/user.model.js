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
<<<<<<< HEAD
    },  
    favorites: [{
        type: Schema.Types.Object, 
        ref: 'Product'
    }]
    // since: {
    //     type: Date,
    //     default: Date.now()
    // },
=======
    },
    favorites: {
        type: Schema.Types.ObjectId,
    },
>>>>>>> 4cf683c0d5b819311fb82b2e0c19d22f892ccfbc
}, { timestamps: true })

global.User = global.User || model("User", userSchema)
export default global.User