/**
 * This script demonstrates a MOWS browser client connecting to a server over HTTP and HTTPS.
 *
 * It relies on the server script located at 'examples/server/server.js'.
 *
 * The server uses a self-signed certifcate for localhost. In order for this client to work:
 *
 * 1. Start the server (examples/server/server.js)
 * 2. In your browser, visit http://localhost:666. You will be prompted with a security warning.
 * 3. Accept / Approve or add an exception as required by your browser.
 * 4. Open index.html in your web browser
 */

/**
 * Simple method to assist in adding events to a client
 */



var logActivity = function(message)
{
  var logElem = document.getElementById('log');
  logElem.innerHTML = logElem.innerHTML + '<br/>' + message;
}

var applyEventHandlers = function(client, msg)
{
  client.on('connect', function(){
    logActivity('Client connected as ' + client.options.clientId);
    client.subscribe('presence');
    client.publish('presence', msg);
  });

  client.on('error', function(e){
    logActivity('Client Error ' + e);
    console.log('Client Error:', e);
  });

  client.on('message', function(topic, message){
    logActivity('Client received message: ' + message);
    client.end();
  });
};

/**
 * Example #1 - connect to an unsecure MOWS server
 */
unsecureClient = mows.createClient(1883, 'ws://localhost');
applyEventHandlers(unsecureClient, 'Hello, I am a unsecure client');

