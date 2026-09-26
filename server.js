const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const morgan=require('morgan');
const app=express();
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Conectado a la base de datos'))
.catch((error)=>console.error('Error al conectar a la base de datos:', error));

const canchasRoutes=require('./routes/canchas');
app.use('/canchas', canchasRoutes);

const reservasRoutes = require('./routes/reservas');
app.use('/reservas', reservasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));