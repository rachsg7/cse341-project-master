const http = require('http');
const routes = require('./prove01-routes');

// Create the server
const server = http.createServer(routes);

server.listen(3000);