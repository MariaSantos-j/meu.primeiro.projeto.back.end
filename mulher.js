const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Simara Conceição',
        imagem: 'https://img.freepik.com/vetores-gratis/desenho-mulher-afro_1108-184.jpg?t=st=1729557563~exp=1729561163~hmac=798bde95ac2681115e65d289b04e14d1f05622dfedcfa3d66ee063dd5e9ce7ab&w=740',
        minibio: 'Desenvolvedora e intrutora'  
    })
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta) 
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)