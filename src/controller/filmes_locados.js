const { result } = require("lodash")
const Servicefilme_locados = require("../service/filmes-locados")
// const filmes = require("../model/filmes")


class ControllerFilmes_locados
{
    async Mostrar(req,res)
    {
        try{
            const id = req.params.id
            const result = await Servicefilme_locados.Mostrar()

            res.status(200).json(result)
        }catch(error){
            res.status(500).json(result)
        }
    }

    async Criar(req,res)
    {
        try{
            const datalocacao = req.body.datalocacao
            const datadevolucao = req.body.datadevolucao
            const locado = req.body.locado
           
          

            const filme = await Servicefilme_locados.Adicionar(datalocacao, datadevolucao,locado )
            res.status(201).json({message: `${JSON.stringify(filme)}Adicionado com sucesso`, })
        }catch(error){
            res.status(500).json({message: "Erro ao locar filme"})
        }
    }

    async Alterar(req,res)
    {
        try{
            const id = req.params.id
            const {locado} = req.body
            const filme = await Servicefilme_locados.Devolucao(id,locado)

            res.status(201).json({message: filme})
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao alterar filme"})
        }
    }

}
module.exports = new ControllerFilmes_locados()