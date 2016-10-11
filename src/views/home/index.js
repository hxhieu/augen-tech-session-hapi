module.exports = function (request, reply) {
    var Product = request.server.settings.app.db.Product;

    Product.findAll({
        raw: true
    }).then(function (products) {
        reply.view('home/index', {
            products: products
        });
    });
};