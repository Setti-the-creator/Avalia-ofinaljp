const express = require('express')
const routersCliente = require('./src/routes/cliente')
const routersFilme = require('./src/routes/filmes')
const routersFilmes_locados = require('./src/routes/filme_locado')
const database = require('./src/config/database')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use("/cliente", routersCliente)
app.use("/filme", routersFilme)
 app.use("/locar", routersFilmes_locados)
const PORT = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        console.info("Banco conectado com sucesso")
        app.listen(PORT, () => {
            console.info(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou: ${e}`)
    })