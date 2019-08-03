#!/usr/bin/env node

var fs = require('fs');

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('server:server');
var http = require('http');


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
var io = require('socket.io').listen(server);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

io.on('connection', function(socket){
  socket.on('servo steering', function(msg){
    console.log(msg);
    console.log("got steering message");
    var parsedmsg = JSON.parse(msg);
    var nmsg = parsedmsg.pwm;
    fs.writeFile('/home/pi/dronekit-python/examples/vehicle_state/AFBWebsite/servopwm.txt', nmsg, function(err){
      if(err) {
        console.log(err);
      } 
    });
  });
  socket.on('throttle', function(msg){
    console.log(msg);
    console.log("got throttle message");
    var parsedmsg1 = JSON.parse(msg);
    var nmsg1 = parsedmsg1.pwm;
    fs.writeFile('/home/pi/dronekit-python/examples/vehicle_state/AFBWebsite/motorpwm.txt', nmsg1, function(err){
      if(err) {
        console.log(err);
      } 
    });
  });
});
