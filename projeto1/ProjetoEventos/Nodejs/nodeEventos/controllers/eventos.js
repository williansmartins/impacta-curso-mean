module.exports = function (app) {
    var EventosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario;

            var params = { usuario: usuario };
            response.render('eventos/menu', params);

        },

        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
            params = { usuario: usuario }; 
            response.render('eventos/cadUsuario', params);
        },

        cadastroEvento: function (request, response) {
            var usuario = request.session.usuario, params = { usuario: usuario };
            response.render('eventos/cadEvento', params);
        },

        listaEventos: function (request, response) {
            var usuario = request.session.usuario,
            params = { usuario: usuario }; 
            response.render('eventos/listaEventos', params);
        },

        novoEvento: function (request, response) {
            //código a ser implementado
            response.redirect('/menu'); }
        }

    return EventosController;
}