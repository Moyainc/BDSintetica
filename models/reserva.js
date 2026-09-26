const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    cancha: {
        type: Number,
        required: true,
        enum: [1, 2, 3]
    },
    clienteNombre: {
        type: String,
        required: true
    },
    clienteTelefono: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    horaInicio: {
        type: String,
        required: true
    },
    horaFin: {
        type: String,
        required: true
    },
    precioTotal: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ['confirmada', 'cancelada'],
        default: 'confirmada'
    }
}, { timestamps: true });

module.exports = mongoose.model('Reserva', reservaSchema);