var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/neventos', { useUnifiedTopology: true, useNewUrlParser: true });

load('models').into(app);

var Evento = app.models.eventos;
var Pagamento = app.models.pagamentos;

app.listen('3200', function () {
  console.log('Servidor iniciado!');
})

app.get('/', function (request, response) {
  response.send('Servidor no ar');
});

app.get('/eventos', function (request, response) {
  Evento.find(function (erro, eventos) {
    console.info(eventos);
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
      evento_upd.descricao = request.body.descricao;
      evento_upd.data = request.body.data;
      evento_upd.preco = request.body.preco;

      evento_upd.save(function (erro, evento) {
        if (erro) {
          response.json(erro);
        }
        else {
          response.json(evento);
        }
      });
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

app.get('/pagamentos', function (request, response) {
  Pagamento.find(function (erro, pagamento) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(pagamento);
    }
  });
});

app.post('/pagamentos', function (request, response) {
  var evento = request.body.evento;
  var preco = request.body.preco;
  var numcartao = request.body.numcartao; var cvv = request.body.cvv;
  var pagamento = {
    'evento': evento, 'preco': preco, 'numcartao': numcartao, 'cvv': cvv
  };

  Pagamento.create(pagamento, function (erro, pagto) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(pagto);
    }
  });
});