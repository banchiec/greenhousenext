import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        // array de string indicando las categorias
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        // array de imagenes
        type: String,
        required: true,
    }
})

global.Product = global.Product || model("Product", productSchema)
export default global.Product