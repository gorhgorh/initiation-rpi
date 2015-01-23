/**
 * Echantillonage de la lumiere par une photorésistance
 */


var five = require("johnny-five")
    , board
    , photoresistor
    , mqtt = require('mqtt');


/**
 * Client Mqtt
 * Il va communniquer avec node red les données échantillonées
 */

// on crée la connection
client = mqtt.createClient(1883, 'localhost');

// on s'incript dans quelques rooms (canaux)
client.subscribe('presence');
client.subscribe('photo1');

// on dis bonjour au serveur
client.publish('presence', 'Hello mqtt');

/**
 * Echantillonage de la photorésitance
 */

// on crée un connection a l'arduino
board = new five.Board();
board.on("ready", function() { // quand l'arduino est pret

  // on crée un objet "photorésistance", qui echantillone un GPIO
  photoresistor = new five.Sensor({
    pin: "A0", // le pin qu'on ecoute ici "A0"
    freq: 100  // la frequence d'echantillonage en millisecondes
  });

  // quand la photorésitance envoie de la donnée
  photoresistor.on("data", function() {
    // l'afficher dans la console
    console.log('photo1',this.value);
    // la convertir en chaine de caractere pour mqtt
    var payload= this.value.toString();
    // publier la donnée via mqtt
    client.publish('photo1', payload);
  });

});
