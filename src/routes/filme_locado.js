const express = require('express')

const auth = require("../middleware/auth")
const ControllerFilmes_locados = require('../controller/filmes_locados')

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas

router.get('/filmes/locar', ControllerFilmes_locados.Criar)
router.put('/filmes/devolver', ControllerFilmes_locados.Alterar)


// Exportar as rotas
module.exports = router