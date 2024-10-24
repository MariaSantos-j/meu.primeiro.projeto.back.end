const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
const data = new Date()
const horario = data.toLocaleTimeString('pt-BR')

function mostraHora(resquest, response) {
response.send(horario)
}

function mostraData(resquest, response) {
    response.send(data)

}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta) 
}

app.use(router.get('/horanonavegador', mostraHora, mostraData))
app.listen(porta, mostraPorta)