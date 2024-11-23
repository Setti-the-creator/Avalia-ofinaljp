const express = require('express')

const auth = require("../middleware/auth")
const ControllerCliente = require('../controller/cliente')

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.post('/', ControllerCliente.Criar)
router.post('/login', ControllerCliente.Login)

router.get('/', auth, ControllerCliente.Mostrar)
router.put('/:id', auth, ControllerCliente.Alterar)
router.delete('/:id', auth, ControllerCliente.Deletar)

// Exportar as rotas
module.exports = router