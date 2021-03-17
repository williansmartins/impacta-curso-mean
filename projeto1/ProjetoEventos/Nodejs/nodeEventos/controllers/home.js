module.exports = function(app){

    var HomeController = {
        index: function(req, res){
            res.render('home/index');
        },

        login: function(request, response){
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            if( nome=='admin' && senha=='admin'){
                var usuario = request.body.usuario;
                request.session.usuario = usuario;
                response.redirect('/menu');
            }else{
                response.redirect('/');
            }
        },

        logout: function(request, response){
            request.session.destroy();
            response.redirect('/');
        },

        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha; 
            var confirma = request.body.usuario.confirma;
            //código a ser implementado
            response.redirect('/menu');
        }
    }

    return HomeController;
}