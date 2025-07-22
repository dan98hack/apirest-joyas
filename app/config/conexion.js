const config = require('./configuracion')
const mongoose = require('mongoose')

module.exports={
    connection: null,
    connect: function() {
        if(module.exports.connection) return module.exports.connection
        return mongoose.connect(config.DB)
        .then(conn => {
           module.exports.connection = conn
           console.log('La Conexion se realizo con exito')
       })
       .catch(e => console.log('Error en la conexion'))
    }
}