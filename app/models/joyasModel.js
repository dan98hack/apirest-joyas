const mongoose = require('mongoose' )
const { Decimal128 } = require('mongoose')

const joyasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        length: 50
    },
    descripcion: {
        type: String,
        required: true,
        length: 200
    },
    precio: {
        type: Number,
        required: true,
    },
    peso: {
        type: Decimal128,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
})

const joyasModel = mongoose.model('joyas', joyasSchema)

module.exports = joyasModel