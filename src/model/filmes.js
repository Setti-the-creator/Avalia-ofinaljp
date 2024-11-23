const database = require("../config/database");
const Modelfilmes_locados = require('./filmes-locados')

class Modelfilme
{
    constructor()
    {
        this.model = database.db.define ('filme', {
            id:
            {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo:{
                type: database.db.Sequelize.STRING,
                unique: true
            },
            faixaetaria:{
                type: database.db.Sequelize.STRING,
                
            },
            diretor:{
                type: database.db.Sequelize.STRING
            }
        }
            
        )
        // this.model.hasOne(Modelfilmes_locados.model, { foreignKey: 'Id' });
    }
    
}
module.exports = new Modelfilme().model