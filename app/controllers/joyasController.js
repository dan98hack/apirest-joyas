const joyasModel = require('../models/joyasModel')

function buscarTodos(req, res) {
    joyasModel.find({})
        .then(joyas =>{
            if (joyas.length) {
                return res.status(200).send({joyas})
            }
            return res.status(204).send({message: 'No hay nada que mostar'})
        })
        .catch(e =>{
            return res.status(404).send({message: 'Error al consultar la informacion'})
        })
}

function agregarJoya(req, res) {
    new joyasModel(req.body).save()
        .then(info => {
            return res.status(200).send({
                message: 'La Informacion se guarda de manera correcta',
                info
            })
        })
        .catch(e => {
            return res.status(404).send({message: 'Error al guardar la informacion'})
        })
}

function buscarJoya(req, res, next) {
    if (!req.body) req.body = {}
    var consulta = {}
    consulta[req.params.key]=req.params.value
    joyasModel.find(consulta)
       .then(joyas => {
            if (!joyas.length) return next();
            req.body.joyas = joyas
            return next();
        })
      .catch(e => {
            req.body.e = e
            return next();
      });
}

function mostrarJoya(req, res) {
    if (req.body.e) return res.status(404).send({message: 'Error al consultar la informacion'})
    if (!req.body.joyas || !req.body.joyas.length) return res.status(204).send({message: 'No hay nada que mostrar'})
    let joyas = req.body.joyas
    return res.status(200).send({joyas})
}

function eliminarJoya(req, res){
    var joyas = {}
    joyas = req.body.joyas
    joyasModel.deleteOne(joyas[0])
    .then(info => {
        return res.status(200).send({message: 'Registro Eliminado'})
    
        })
    .catch(e => {
        return res.status(404).send({mensaje: 'Error al eliminar la informacion'})
    })    
    
}

function actualizarJoya(req, res) {
    if (req.body.e) return res.status(404).send({message: 'Error al consultar la información'})
    if (!req.body.joyas || !req.body.joyas.length) return res.status(204).send({message: 'No hay joya para actualizar'})
    
    const joyaId = req.body.joyas[0]._id
    const datosActualizados = req.body.datosActualizados
    
    joyasModel.findByIdAndUpdate(joyaId, datosActualizados, {new: true})
        .then(joyaActualizada => {
            if (!joyaActualizada) {
                return res.status(404).send({message: 'No se encontró la joya para actualizar'})
            }
            return res.status(200).send({
                message: 'Joya actualizada correctamente',
                joya: joyaActualizada
            })
        })
        .catch(e => {
            return res.status(500).send({message: 'Error al actualizar la joya', error: e.message})
        })
}


module.exports = {
    buscarTodos,
    agregarJoya,
    buscarJoya,
    mostrarJoya,
    eliminarJoya,
    actualizarJoya
}