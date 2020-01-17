const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let productosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requrido']
    },
    precio_uni: {
        type: Number,
        required: [true, 'El email es necesario']
    },
    categoria: {
        type: Number,
        required: [true, 'El password es necesario']
    },

    disponible: {
        type: Boolean,
        required: [true, 'La disponibilidad es necesario'],
        require: false
    },
    usuario: {
        type: Number,
        required: [true, 'El usuario es necesario']
    }
});

module.exports = mongoose.model('Productos', productosSchema)