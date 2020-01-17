const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requrido']
    },
    usuario: {
        type: Number,
        required: [true, 'El usuario es necesario']
    }

});

module.exports = mongoose.model('Categoria', categoriaSchema)