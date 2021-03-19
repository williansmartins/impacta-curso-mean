var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/contatos');

load('models').into(app);

// var Contato = app.models.contato;

app.listen('3000', function(){
  console.info("Servidor no ar!");
})

app.get('/', function(request, response){
  response.send('Servidor no ar');
})

app.get('/contatos', function(request, response){
  response.send('contatos');
})

app.get('/contatos/:id', function(request, response){
  var id = request.query.id;
  response.send('contatos -->' + id);
})