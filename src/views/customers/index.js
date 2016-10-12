module.exports = function (request, reply) {
    var Customer = request.server.settings.app.db.Customer;

    Customer.findAll({
        raw: true
    }).then(function (customers) {
        reply.view('customers/index', {
            customers: customers
        });
    });
};