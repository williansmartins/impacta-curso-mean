var express = require('express');
var load = require('express-load');
app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

load('controllers').then('routes').into(app);

app.listen(3000, function () {
  console.log("Aplicação no ar.");

});