//conexão com Banco de Dados
const Sequelize  = require("sequelize");
const sequelize  = new Sequelize('crud','root','30351964Asd', {
    host:'localhost',
    dialect:'mysql'
})
//Exporta o sequelize
module.exports =  {
    Sequelize: Sequelize,
    sequelize: sequelize
}


