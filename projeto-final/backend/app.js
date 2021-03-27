var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/neventos', { useUnifiedTopology: true, useNewUrlParser: true });

load('models').into(app);

var Evento = app.models.eventos;
var Pagamento = app.models.pagamentos;
var Produto = app.models.produtos;

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
      // response.json(evento);
      Evento.deleteOne(evento, function (erro, evento) {
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


/////////////TODO: mudar o local das rotas

app.get('/produtos', function (request, response) {
  Produto.find(function (erro, model) {
    console.info(model);
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(model);
    }
  });
});

app.get('/produtos/:id', function (request, response) {
  var id = request.params.id;
  Produto.findById(id, function (erro, resultado) {
    if (erro) {
      response.json(erro);
    }
    else {
      response.json(resultado);
    }
  });
});

app.post('/produtos', function (request, response) {
  var codigo = request.body.codigo;
  var descricao = request.body.descricao;
  var valorCompra = request.body.valorCompra;
  var valorImpressao = request.body.valorImpressao;

  var model = {
    'codigo': codigo, 
    'descricao': descricao,
    'valorCompra': valorCompra,
    'valorImpressao': valorImpressao
  };
  Produto.create(model, function (erro, resultado) {
    if (erro) {
      response.json(erro);
    }

    else {
      response.json(resultado);
    }
  });
});

app.put('/produtos/:id', function (request, response) {
  var id = request.params.id;

  Produto.findById(id, function (erro, model) {
    if (erro) {
      response.json(erro);
    }
    else {
      var model_upd = model;
      
      model_upd.codigo = request.body.codigo;
      model_upd.descricao = request.body.descricao;
      model_upd.valorCompra = request.body.valorCompra;
      model_upd.valorImpressao = request.body.valorImpressao;
      
      model_upd.save(function (erro, resultado) {
        if (erro) {
          response.json(erro);
        }
        else {
          response.json(resultado);  
        }
      });
    }
  });
});

app.delete('/produtos/:id', function (request, response) {
  var id = request.params.id;

  Produto.findById(id, function (erro, model) {
    if (erro) {
      response.json(erro);
    } else {
      // response.json(model);
      Produto.deleteOne(model, function (erro, resultado) {
        if (erro) {
          response.json(erro);
        }
        else {
          response.json(resultado); 
        }
      });
    }
  });
});