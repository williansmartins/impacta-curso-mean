module.exports = function(app){
    var eventos = app.controllers.eventos;
    app.get('/menu', eventos.menu);
}