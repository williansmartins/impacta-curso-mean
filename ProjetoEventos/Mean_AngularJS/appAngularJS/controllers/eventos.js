module.exports = function (app) {
    var EventosController = {
        index: function (req, res) {
            res.render('eventos/index');
        }
    };
    return EventosController;
};