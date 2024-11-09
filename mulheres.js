const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota 
const cors = require('cors') // aqui estou trazendo o pacote cors, que permite consumir está API no front end

const conectaBancoDeDados = require('./bancoDeDados') //aqui estou ligando ao arquivo banco de dados
conectaBancoDeDados() //chamando a função que conecta o banco de dados
const Mulher = require('./mulherModel')

const app = express() //aqui estou iniciando o app
app.use(express.json()) //aqui estou configurando as requisições em formato .json
app.use(cors())
const porta = 3333 //aqui estou criando a porta

//Get
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response .json(mulheresVindasDoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//post
async function criaMulher(request, response) {
 const novaMulher = new Mulher ({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao
 })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }

}

//patch
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
        
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

        response.json(mulherAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    } 
    
} 

//delete
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem: "Mulher Deletada com Sucessso!"})
    } catch (erro) {
        console.log(erro)
    }    
}
    
//Porta
function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta) 
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota get /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota post /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota patch /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei rota delete /mulheres/:id

app.listen(porta, mostraPorta) //servidor ouvindo a porta