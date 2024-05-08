
const express = require('express');
const cors = require('cors');
const { db_connection } = require('./database/config');
require('dotenv').config();

//console.log(process.env);

// Crear el servidor de express
const app = express();

// Base de datos
db_connection();

//CORS
app.use(cors());

//Directorio público
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor en puerto ${ 4000 }`)
} );