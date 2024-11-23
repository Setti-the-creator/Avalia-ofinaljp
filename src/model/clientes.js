const database = require("../config/database");
const Modelfilmes_locados = require('./filmes-locados')

class Modelcliente
{
    constructor()
    {
        this.model = database.db.define ('clientes', {
            id:
            {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome:{
                type: database.db.Sequelize.STRING,
            },
            email:{
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha:{
                type: database.db.Sequelize.STRING
            }
        }
            
        )
        // this.model.hasMany(Modelfilmes_locados.model, { foreignKey: 'Idcliente' });
    }
    
}
module.exports = new Modelcliente().model