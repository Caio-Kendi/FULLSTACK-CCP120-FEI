require("colors")
// inclui o módulo http
var http = require('http');
// inclui o módulo express
var express = require('express' ) ;

// cria a variável app, pela qual acessaremos
// os métodos / funções existentes no framework
// express
var app = express() ;

// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
app.use (express. static('./public'));

// cria o servidor
var server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(3000);

// mensagem exibida no console para debug
console.log("servidor rodando ... ".rainbow);

var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

// Rota para receber o POST do formulário de cadastro
app.post('/Laboratorios/Laboratorios CCP120.html', (req, res) => {
    const { usuario, email, senha } = req.body;
  
    console.log('Novo cadastro recebido:');
    console.log('Usuário:', usuario);
    console.log('Email:', email);
    console.log('Senha:', senha);
  
    // Retorna uma resposta de sucesso (pode ser renderizando EJS ou HTML direto)
    res.render('resposta', {
      status: 'Cadastro realizado com sucesso!',
      usuario: usuario
    });
  });
  

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
resposta.redirect("/Laboratorios/LaboratoriosCCP120.html")
})

app.get('/inicio', function (requisicao, resposta){
var nome = requisicao.query.info;
console.log(nome);
})

app.post('/inicio', function (requisicao, resposta){
var data = requisicao.body.data;
console.log(data);
})

app.get('/cadastro',function (requisicao, resposta){
var nome = requisicao.query.nome;
var sobrenome = requisicao.query.sobrenome;
var nascimento = requisicao.query.nascimento;
var civil = requisicao.query.civil;

resposta.render('resposta_cadastro', {nome, sobrenome, nascimento, civil})
})
