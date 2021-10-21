const express = require("express")
const app = express()
const port = 8089

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", function(req, res){
    res.render("cadastro")
})

app.get("/login", function(req, res){
    res.render("login")
})

app.post("/login_realizado", function(req, res){
    res.send(` Nome de usuário: ${req.body.usuario} <br> Email: ${req.body.email}`) //só p mostrar que as infos estao sendo recebidas
})

app.listen(port, function(){
    console.log("Servidor rodando na URL http://localhost:8089")
})