module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var evento = Schema({
        descricao: { type: String, required: true }, data: { type: Date },
        preco: { type: Number }
    });
    return mongoose.model('eventos', evento);
};