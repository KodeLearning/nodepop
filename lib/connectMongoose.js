require('dotenv').config()
const mongoose = require('mongoose')

/** Gestiona posibles errores de conexión */
mongoose.connection.on('error', e => {
  console.log('Error de conexión', e)
})

/** Muestra un mensaje la primera vez que se conecta a la DB */
mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB en', mongoose.connection.name)
})

mongoose.connect(process.env.DB_SERVER)

module.exports = mongoose.connection