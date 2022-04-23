//Importa a Conexão 
const db = require("./db");

//Estrutura da Tabela
const Post = db.sequelize.define("postagens",{
    titulo: {type: db.Sequelize.STRING},
    conteudo: {type: db.Sequelize.TEXT},

});

//Exporta o Post
module.exports = Post;

//cria a Tabela Ao executar o Módulo.
Post.sync({force:true});

