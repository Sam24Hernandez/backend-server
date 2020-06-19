var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ROLE_ADMIN', 'ROLE_USER'],
    message: '{VALUE} no es un rol permitido.'
};

var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'Este campo es obligatorio.'] },
    email: { type: String, unique: true, required: [true, 'Este campo es obligatorio.'] },
    password: { type: String, required: [true, 'Este campo es obligatorio.'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'ROLE_USER', enum: rolesValidos }
});

usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} ya está en uso.' });

module.exports = mongoose.model('Usuario', usuarioSchema);