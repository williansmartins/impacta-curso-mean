module.exports = function(app){
    var EventosController = {
        menu: function(request, response){
            var usuario = request.session.usuario;

            console.info(">>>>>>>>>>>");
            console.info(usuario);

            if(usuario == undefined){
                response.render('home/index');
            }else{
                var params = {usuario : usuario};
                response.render('eventos/menu', params);
            }

        }
    }

    return EventosController;
}