const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./Post");


//BodyParser

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.use("/css", express.static('views/layouts/css'));
app.use("/img", express.static('views/layouts/img'));


app.get("/cad", function(req,res){
    res.render("formulario");

});

app.get("/", function (req,res){
    Post.findAll().then(
        function(posts){
            res.render("home", {posts:posts});
        }
    )
});

app.post("/add", function(req,res){
    Post.create({
        nome:req.body.nome,
        email:req.body.email,
        telefone:req.body.telefone,
        comentario:req.body.comentario
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Falha ao Cadastrar o post " + erro)
    })
});

app.get("/deletar/:id", function(req, res){
    Post.destroy({
        where:{'id':req.params.id}
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Falha ao Excluir post " + erro)
    })
});

//Template 
app.engine("handlebars", engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars')
app.set('views', './views')


//servidor

app.listen(8081,function(){
    console.log("ok");
});