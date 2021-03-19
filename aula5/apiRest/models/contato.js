module.exports = function(app){
    var mongoose = require('mongoose');

    var contato = mongoose.Schema({
        cpf: String,
        nome: String,
        telefone: String
    });

    return mongoose.model('contatos', contato);
}