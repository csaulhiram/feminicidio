const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    usuario: {
        type: String,
        required: [true, 'El usuario es obligatorio'],
        maxlength: [16, 'El nombre no puede exceder los 16 caracteres'],
        minlength: [4, 'El nombre debe contener 4 o más caracteres']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        maxlength: [16, 'El nombre no puede exceder los 16 caracteres'],
        minlength: [4, 'El nombre debe contener 4 o más caracteres']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        maxlength: [80, 'La contraseña no puede exceder los 80 caracteres'],
        minlength: [4, 'La contraseña debe contener 4 o más caracteres']
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es obligatorio'],
        maxlength: [14, 'El teléfono no puede exceder los 16 caracteres'],
        minlength: [7, 'El teléfono debe contener 7 o más caracteres']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    terminos: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Usuario', UsuarioSchema);