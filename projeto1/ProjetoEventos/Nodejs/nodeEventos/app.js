var express = require('express');
var load = require('express-load');

var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var error = require('./middlewares/error');

app = express();

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/neventos');

mongoose.connection.on('connected', function () {
  console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error', function (err) {
  console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('=====Conexão finalizada=====');
});

app.set('views', __dirname +  '/views');
app.set('view engine','ejs');

app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static( __dirname + '/public'));



load('models')
  .then('controllers')
  .then('routes')
  .into(app);

//middlewares
app.use(error.notFound); 
app.use(error.serverError);

  app.listen(3000,function(){
  console.log("Aplicaçao no ar");
});