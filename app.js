'use strict';

const r_index = require('./routers/index');
const r_post = require('./routers/post');
const Hapi = require('hapi');
const Path = require('path');
const server =  new Hapi.Server();

const config_server = {
    port: 5000,
    host: 'localhost',
    routes: {
        cors: true,
        files: {
            relativeTo: Path.join(__dirname, './view')
        }
    }
}

server.connection(config_server);

server.route(r_index);
server.route(r_post);

server.register(require('inert'), (err) => {
    if(err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    });
});

server.start((err) => {
    if(err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});