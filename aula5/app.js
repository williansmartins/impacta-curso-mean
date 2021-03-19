var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/contatos');

load('models').into(app);

var Contato = app.models.contato;

app.listen('3000', function(){
  console.log('OK');
})

app.get('/', function (request, response) {
  response.send('Servidor no ar');
});


//contatos
app.get('/contatos', function (request, response) {
  Contato.find(function (erro, contatos) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(contatos);
    }
  });
});

app.get('/contatos/:cpf', function (request, response) {
  var cpf = request.params.cpf;
  Contato.findById(cpf, function (erro, contato) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(contato);
    }
  });
});

app.post('/contatos', function (request, response) {
  var cpf = request.body.cpf;
  var nome = request.body.nome;
  var data = request.body.data.split('/');
  var email = request.body.email;
  var telefone = request.body.telefone;

  //formato dd/MM/yyyy
  var objDate = new Date(data[2], data[1] - 1, data[0]);

  var contato = {
    'cpf': cpf,
    'nome': nome,
    'dataNascimento': objDate,
    'email': email,
    'telefone': telefone
  };

  Contato.create(contato, function (erro, contato) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(contato);
    }
  });
});
