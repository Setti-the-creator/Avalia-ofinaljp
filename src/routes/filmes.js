const express = require('express')

const auth = require("../middleware/auth")
const ControllerFilmes = require('../controller/filmes')

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.post('/',  ControllerFilmes.Criar)

router.get('/', auth, ControllerFilmes.Mostrar)
router.put('/:id', auth, ControllerFilmes.Alterar)
router.delete('/:id', auth, ControllerFilmes.Deletar)

// Exportar as rotas
module.exports = router