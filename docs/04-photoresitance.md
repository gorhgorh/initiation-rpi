# Photo resistance

une photorésistance est un resistance qui varie selon l'intensités lumineuse reçue elle va nous servir pour voir si le laser a été coupé.

pour mesurer cette resistance, nous allons utiliser un arduino, et plus particulièrement une entrée analogique, qui fait défaut au raspberry pi. cela nous permet aussi d'appréhender une autre utilisation de l'arduino, via javascript.

**installation de la photoresistance**  
TBD ... expliqué sur place 

**du code**  
voici une version commentée du code que nous allons utiliser

```
/**
 * Echantillonage de la lumiere par une photorésistance
 */


var five    = require("johnny-five")
  , board
  , photoresistor
  , mqtt    = require('mqtt')
  , config  = require('../config')
;
console.log(config.mqtt);

/**
 * Client Mqtt
 * Il va communniquer avec node red les données échantillonées
 */

// on crée la connection
client = mqtt.createClient(config.mqttPort, config.mqttIp);

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

```

**lancer l'échantillonage**

une fois connecté en ssh sur le pi 

```
cd /home/pi/initiation-rpi/j5/
node photo.js
```

vous pouvez maintenant jouer avec node red
