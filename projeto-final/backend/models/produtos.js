module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var produto = Schema({
        codigo: { type: String, required: true},
        descricao: { type: String, required: true},
        valorCompra: { type: Number, required: true},
        valorImpressao: { type: Number, required: true},
    });
    return mongoose.model('produtos', produto);
};