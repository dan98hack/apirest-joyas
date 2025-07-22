const  CONFIG = require('./app/config/configuracion.js')
const app = require('./app/app.js')
const conexion = require('./app/config/conexion.js')

conexion.connect()

app.listen(CONFIG.PORT, () =>{
    console.log(`Aplicacion corriendo en puerto ${CONFIG.PORT}`);
})