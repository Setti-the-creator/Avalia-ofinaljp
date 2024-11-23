const database = require('../config/database')
const bcrypt = require("bcrypt")
const ModelCliente = require('../model/clientes')
const salt = 12;
const jwt = require('jsonwebtoken')
// const model = new modelExercicio()
class Servicecliente
{
    
    async Mostrar()
     {
     return ModelCliente.findAll()
     }
    async Adicionar(nome,email, senha)
    {
        if(!nome || !email|| !senha)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
        const hashSenha = await bcrypt.hash( senha,salt)
    return ModelCliente.create({senha: hashSenha, nome, email})
    }

    async Alterar(id, nome,email, senha, )
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente)
            {
                throw new Error("Cliente nao encontrado")
            }
        cliente.nome = nome 
        ?nome
        :cliente.nome
        cliente.email = email 
        ? email
        :cliente.email
        cliente.senha = senha 
        ?await bcrypt.hash(senha,salt)
        :cliente.nome
    

        cliente.save()
        return cliente
    }
    async Deletar(id)
    {
    const cliente = await ModelCliente.findByPk(id)
    if(!cliente)
    {
        throw new Error("Cliente nao encontrado")
    }
    return cliente.destroy()
    }

    async Login(email, password) {
        if(!email || !password) {
            throw new Error("Email ou senha inválido!")
        }

        const pessoa = await ModelCliente.findOne({ where: { email } })

        if(!pessoa) {
            throw new Error("Email ou senha inválido!")
        }

        const senhaValida = bcrypt.compare(password, pessoa.password)

        if(!senhaValida) {
            throw new Error("Email ou senha inválido!")
        }

        return jwt.sign({ id: pessoa.id }, 'segredo', { expiresIn: 60 * 60 })
    }
    
}

module.exports = new Servicecliente();