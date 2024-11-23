const database = require('../config/database')
const Modelfilme = require('../model/filmes')
// const model = new modelExercicio()
class Servicefilme
{
    
    async Mostrar()
     {
     return Modelfilme.findAll()
     }
    async Adicionar(titulo,faixaetaria, diretor)
    {
        if(!titulo || !faixaetaria|| !diretor)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
       
    return Modelfilme.create({diretor, titulo, faixaetaria})
    }

    async Alterar(id, titulo,faixaetaria, diretor )
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const filme = await Modelfilme.findByPk(id)
        if(!filme)
            {
                throw new Error("filme nao encontrado")
            }
        filme.titulo = titulo 
        ?titulo
        :filme.titulo
        filme.faixaetaria = faixaetaria 
        ? faixaetaria
        :filme.faixaetaria
        filme.diretor = diretor 
        ?diretor 
        :filme.diretor
    

        filme.save()
        return filme
    }
    async Deletar(id)
    {
    const filme = await Modelfilme.findByPk(id)
    if(!filme)
    {
        throw new Error("filme nao encontrado")
    }
    return filme.destroy()
    }
    
}

module.exports = new Servicefilme();