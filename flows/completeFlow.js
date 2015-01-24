[{"id":"88ebb85c.771448","type":"mqtt-broker","broker":"192.168.1.86","port":"1883","clientid":"node-red"},{"id":"98e12a68.671ed8","type":"function","name":"smooth value","func":"\n// on extrait la valeur samplée par l'arduino dans une variable\n\nvar val = parseInt(msg.payload);\nmsg.debug = typeof val + \" pl : \" + msg.payload\n// si la valeur est supperieure a 100, on coupe le rayon\nif(val > 100) {\n\tmsg.payload = {val:val,photo:false};\n} \n// sinon le rayon n'est pas c\nelse {\n\tmsg.payload = {val:val,photo:true}\n};\n\nreturn msg;","outputs":1,"x":412,"y":352,"z":"46574b1f.b9a8b4","wires":[["ce52403.f31adc"]]},{"id":"4d01e80b.b2fe18","type":"debug","name":"","active":true,"console":"false","complete":"true","x":994,"y":352,"z":"46574b1f.b9a8b4","wires":[]},{"id":"ce52403.f31adc","type":"function","name":"get change","func":"\n\nmsg.dbg2 = \t\"c state\" + context.state + \"pl \" + msg.payload.photo;\n\nif(msg.payload.photo != context.state){\n\tcontext.state = msg.payload.photo;\n\tmsg.payload.change=true;\n\treturn msg;\n} \n\n","outputs":1,"x":616,"y":352,"z":"46574b1f.b9a8b4","wires":[["d87d1fbc.2782e"]]},{"id":"511cfc6f.aee304","type":"mqtt in","name":"","topic":"photo1","broker":"88ebb85c.771448","x":174,"y":353,"z":"46574b1f.b9a8b4","wires":[["98e12a68.671ed8"]]},{"id":"89e20e18.761df","type":"rpi-gpio out","name":"","pin":"3","set":true,"level":"1","out":"out","x":993,"y":292,"z":"46574b1f.b9a8b4","wires":[]},{"id":"192ff980.e6d006","type":"inject","name":"","topic":"","payload":"30","payloadType":"string","repeat":"","crontab":"","once":false,"x":172,"y":225,"z":"46574b1f.b9a8b4","wires":[["98e12a68.671ed8"]]},{"id":"d1789b4e.2e8768","type":"inject","name":"","topic":"","payload":"300","payloadType":"string","repeat":"","crontab":"","once":false,"x":177,"y":281,"z":"46574b1f.b9a8b4","wires":[["98e12a68.671ed8"]]},{"id":"d87d1fbc.2782e","type":"function","name":"switch pin","func":"\nif (msg.payload.photo == true){\n\tmsg.payload = 1;\n}\nelse msg.payload = 0;\nreturn msg;","outputs":1,"x":808,"y":352,"z":"46574b1f.b9a8b4","wires":[["89e20e18.761df","4d01e80b.b2fe18"]]}]