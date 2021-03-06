module.exports = function(app){
    var eventos = app.controllers.eventos;
    var valida = require('./../middlewares/valida');

    app.get('/menu', eventos.menu);
    app.get('/cadUsuario', valida, eventos.cadastroUsuario); 
    app.get('/cadEvento', valida, eventos.cadastroEvento); 
    app.get('/listaEventos', valida, eventos.listaEventos);
    app.post('/novoEvento', eventos.novoEvento);
}