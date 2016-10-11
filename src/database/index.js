const Sequelize = require('sequelize');

var sequelize = new Sequelize('AdventureWorks', 'mitmeo_dev', 'abcd_1234', {
    // host: 'localhost',
    // dialectOptions: {
    //     instanceName: 'mssql2014'
    // },
    host: 'mitmeo-devs.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
    },
    define: {
        schema: 'SalesLT'
    }
});

var defaultModelOptions = {
    timestamps: false,
    freezeTableName: true
};

// sequelize.authenticate().then(function (errors) {
//     console.log(errors)
// });

var models = {
    product: sequelize.define(
        'Product',
        {
            id: {
                type: Sequelize.INTEGER,
                field: 'ProductID',
                primaryKey: true
            },

            name: {
                type: Sequelize.STRING,
                field: 'Name'
            },

            code: {
                type: Sequelize.STRING(50),
                field: 'ProductNumber'
            },

            buyPrice: {
                type: Sequelize.FLOAT, 
                field: 'StandardCost'
            },

            sellPrice: {
                type: Sequelize.FLOAT,
                field: 'ListPrice'
            }
        },
        defaultModelOptions
    )
};

module.exports = {
    connection: sequelize,
    Product: models.product
};