'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: process.env.HOST || '0.0.0.0', 
    port: process.env.PORT || 8080 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {

        return reply('hello world from tech session');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});