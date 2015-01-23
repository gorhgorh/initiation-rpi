var mows   = require('mows')
  , client = mows.createClient('ws://192.168.1.86:1337');
  // pass an optional 'ws://localhost:port' here.

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  console.log(message);

  client.end();
});
