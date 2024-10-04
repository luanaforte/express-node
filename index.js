let express = require('express') 

let app = express()

//ROTAS 
app.get('/', function(req, res) {
    res.send('Seja bem-vindo ao meu app!')
})

app.get('/contato', function(req, res) {
    res.send('página para contatos.')
})

app.get('/sobre', function(req, res) {
    res.send('sobre nós:')
})

//PARÂMETROS
app.get('/ola/:nome/:cargo/:idade/:cor', function(req, res) {
    res.send('<h3>ola ' +req.params.nome+'</h3>' + '<h3>seu cargo é: '+req.params.cargo+'</h3>' + '<h3>sua idade é: '+req.params.idade+'</h3>' + '<h3>cor favorita: '+req.params.cor+'</h3>')
})

app.listen(8082, function() {
    console.log('o servidor está rodando o na url http://localhost:8082')
})