const { result } = require("lodash")
const Servicecliente = require("../service/cliente")
const cliente = require("../model/clientes")

class ControllerCliente
{
    async Mostrar(req,res)
    {
        try{
            const id = req.params.id
            const result = await Servicecliente.Mostrar()

            res.status(200).json(result)
        }catch(error){
            res.status(500).json(result)
        }
    }

    async Criar(req,res)
    {
        try{
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
          
            
            const cliente = await Servicecliente.Adicionar(nome, email, senha)
            res.status(201).json({message: cliente, })
        }catch(error){
            res.status(500).json({message: "Erro ao adicionar cliente"})
        }
    }

    async Alterar(req,res)
    {
        try{
            const id = req.params.id
            const {email, senha} = req.body
            const Cliente = await Servicecliente.Alterar(id, email, senha)

            res.status(201).json({message: Cliente})
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao alterar cliente"})
        }
    }

    async Deletar(req,res){
        try{
            const id = req.params.id
            await Servicecliente.Deletar(id)

            res.status(204).send
        }catch(error){
            res.status(500).json({message: "Erro ao deletar"})
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await Servicecliente.Login(email, senha)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

}
module.exports = new ControllerCliente();