const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
{
    nome: 'Simara Conceição',
    imagem: 'https://w7.pngwing.com/pngs/320/234/png-transparent-woman-cartoon-businessperson-drawing-woman-people-public-relations-business.png',
    minibio: 'Desenvolvedora e instrutora'
},
{
    nome: 'Iana Chan',
    imagem: 'https://w7.pngwing.com/pngs/320/234/png-transparent-woman-cartoon-businessperson-drawing-woman-people-public-relations-business.png',
    minibio: 'Fundadora da ProgaMaria'
},
{
    nome: 'Nina da Hora',
    imagem: 'https://w7.pngwing.com/pngs/320/234/png-transparent-woman-cartoon-businessperson-drawing-woman-people-public-relations-business.png',
    minibio: 'Hacker Antirracista'
}
]

function mostraMulheres(resquest, response) {
response.json(mulheres)
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta) 
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)