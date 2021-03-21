module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var pagamento = Schema({
        evento: { type: String }, preco: { type: Number }, numcartao: { type: String }, cvv: { type: String }
    });
    return mongoose.model('pagamentos', pagamento);
};