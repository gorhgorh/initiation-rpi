if (!process.env.DEBUG) process.env.DEBUG = 'mosca';

var ecstatic = require('ecstatic');
var path = require('path');

var debug         = require('debug')('mosca');

var mosca = require('mosca');
var pubPath = path.resolve(__dirname, '../public');
/**
 * Webserver
 */
var app = require('http').createServer(
  ecstatic({ root: pubPath })
);
var io = require('socket.io')(1337);

app.listen(8080);
console.log('Listening on :8080');


/**
 * MQTT
 */

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var moscaSettings = {
  port: 1884,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Mongo,
    url: 'mongodb://localhost:27017/mqtt'
  }
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

// fired when the mqtt server is ready
function setup() {
  debug('Mosca server is up and running');
}


/**
 * socket.io
 */

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
