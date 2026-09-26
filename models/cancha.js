const mongoose = require('mongoose');

const canchaSchema = new mongoose.Schema({
    numero:{
        type:Number,
        required:true,
        unique:true
    },
    precioHora:{
        type:Number,
        required:true,
        default:120000
    }
});

module.exports = mongoose.model('Cancha', canchaSchema);