const database = require("../config/database");
const ModelCliente = require('./clientes');
const Modelfilme = require('./filmes'); 

class Modelfilmes_locados
{
    constructor()
    {
        this.model = database.db.define ('filmeslocados', {
            id:
            {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                
            },
            idfilme:{
                type: database.db.Sequelize.INTEGER,
                unique: true
            },
            idcliente:{
                type: database.db.Sequelize.INTEGER,
                unique: true
            
            },
            datalocacao:{
                type: database.db.Sequelize.DATEONLY
            },
            datadevolucao:{
                type: database.db.Sequelize.DATEONLY
            },
            locado:
            {
                type: database.db.Sequelize.STRING
            }
            // clienteId : {
            //     references: {
            //         model: this.ModelCliente.model,
            //         key: 'Id'
            //     }
            //  },
            // filmeid: {
            // references: {
            //     model: this.Modelfilme.model,
            //     key: 'Id'
            //     }
            // }
    });
        // this.model.belongsTo(ModelCliente.model, { foreignKey: 'Id' });
        // this.model.belongsTo(Modelfilme.model, { foreignKey: 'Id' });
    }
    
}
module.exports = new Modelfilmes_locados().model