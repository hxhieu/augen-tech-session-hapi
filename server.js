'use strict';

const Path = require('path');
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    },
    app: {
        db: require('./src/database')
    }
});

server.connection({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080
});

server.register([require('vision')], (err) => {

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: Path.join(__dirname, 'src/views'),
        layoutPath: '_layouts',
        layout: 'default',
    });


    // Add the route
    server.route({
        method: 'GET',
        path: '/',
        handler: require('./src/views/home')
    });

    server.route({
        method: 'GET',
        path: '/customers',
        handler: require('./src/views/customers')
    });

    // Start the server
    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at test:', server.info.uri);
    });
});