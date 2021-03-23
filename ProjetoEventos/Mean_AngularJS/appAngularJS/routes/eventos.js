module.exports = function (app) {
    var evento = app.controllers.eventos;
    app.get('/', evento.index);
};