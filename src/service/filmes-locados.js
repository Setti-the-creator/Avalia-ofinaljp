const database = require('../config/database')
const Modelfilmes_locados = require('../model/filmes-locados')
// const model = new modelExercicio()
class Servicefilme_locados
{
    
    async Mostrar()
     {
     return Modelfilmes_locados.findAll()
     }
    async Adicionar(datalocacao,datadevolucao, locado)
    {
        if(!datalocacao || !datadevolucao|| !locado)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
       
    return Modelfilmes_locados.create({datalocacao, datadevolucao, locado})
    }

    async Devolucao(id, locado)
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const filme = await Modelfilmes_locados.findByPk(id)
        if(!filme)
            {
                throw new Error("filme locado nao encontrado")
            }
        filme.locado = locado 
        ? locado
        :filme.locado
       

        filme.save()
        return filme
    }

}

module.exports = new Servicefilme_locados();