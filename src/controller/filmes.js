const { result } = require("lodash")
const Servicefilme = require("../service/filmes")
// const filmes = require("../model/filmes")


class ControllerFilmes
{
    async Mostrar(req,res)
    {
        try{
            const id = req.params.id
            const result = await Servicefilme.Mostrar()

            res.status(200).json(result)
        }catch(error){
            res.status(500).json(result)
        }
    }

    async Criar(req,res)
    {
        try{
            const titulo = req.body.titulo
            const faixaetaria = req.body.faixaetaria
            const diretor = req.body.diretor
          

            const filme = await Servicefilme.Criar(titulo, faixaetaria, diretor)
            res.status(201).json({message: `${JSON.stringify(filme)}Adicionado com sucesso`, })
        }catch(error){
            res.status(500).json({message: "Erro ao adicionar filme"})
        }
    }

    async Alterar(req,res)
    {
        try{
            const id = req.params.id
            const {titulo, faixaetaria, diretor} = req.body
            const filme = await Servicefilme.Alterar(id,titulo, faixaetaria, diretor)

            res.status(201).json({message: filme})
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao alterar filme"})
        }
    }

    async Deletar(req,res){
        try{
            const id = req.params.id
            await Servicefilme.Deletar(id)

            res.status(204).send
        }catch(error){
            res.status(500).json({message: "Erro ao deletar"})
        }
    }

}
module.exports = new ControllerFilmes()