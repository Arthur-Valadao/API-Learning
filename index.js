const express = require('express')
const app = express()

//Aqui é o Server
app.listen('3000')


//exemplo POST com retorno do conteudo após o POST com status 200
app.route('/').post( (req, res) => res.send(req.body))

//middleware
app.use(express.json())

let author= "Arthur"

//Método PUT alterando um campo
app.route('/').put((req, res) => { 
  author = req.body.author
  res.send(author)
})

app.route('/').get( (req, res) => res.send(author) )


