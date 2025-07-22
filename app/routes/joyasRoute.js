const express = require('express')
const router = express.Router()
const joyasController = require('../controllers/joyasController')

router.get('/', joyasController.buscarTodos)
    .post('/', joyasController.agregarJoya)
    .get('/:key/:value', joyasController.buscarJoya, joyasController.mostrarJoya)
    .delete('/:key/:value', joyasController.buscarJoya, joyasController.eliminarJoya)


module.exports = router