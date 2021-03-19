var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/contatos');

load('models').into(app);

var Evento = app.models.eventos;

app.listen('3000', function(){
  console.log('Servidor iniciado!');
})

app.get('/', function (request, response) {
  response.send('Servidor no ar');
});

app.get('/eventos', function (request, response) {
  Evento.find(function (erro, eventos) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(eventos);
    }
  });
});

app.get('/eventos/:id', function (request, response) {
  var id = request.params.id;
  Evento.findById(id, function (erro, evento) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(evento);
    }
  });
});

app.post('/eventos', function (request, response) {
  var descricao = request.body.descricao;
  var data = request.body.data;
  var preco = request.body.preco;
  var evento = {
    'descricao': descricao, 'data': data,
    'preco': preco
  };
  Evento.create(evento, function (erro, evento) {
    if (erro) {
      response.json(erro);
    }

    else {
      response.json(evento);
    }
  });
});

app.put('/eventos/:id', function (request, response) {
  var id = request.params.id;
  Evento.findById(id, function (erro, evento) {
    if (erro) {
      response.json(erro);
    }
    else {
      var evento_upd = evento;
      evento_upd.descricao = request.body.descricao; evento_upd.data = request.body.data; evento_upd.preco = request.body.preco;
      evento_upd.save(function (erro, evento) {
        if (erro) {
          response.json(erro);
        }
        else {
          response.json(evento);
        }
      });
      response.json(evento);
    }
  });
});

app.delete('/eventos/:id', function (request, response) {
  var id = request.params.id;
  Evento.findById(id, function (erro, evento) {
    if (erro) {
      response.json(erro);
    } else {
      Evento.remove(evento, function (erro, evento) {
        if (erro) {
          response.json(erro);
        }
        else {
          response.send('removido');
        }
      });
    }
  });
});