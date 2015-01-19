[{"id":"88ebb85c.771448","type":"mqtt-broker","broker":"192.168.1.24","port":"1883","clientid":"node-red"},{"id":"3e15210.fc1eae","type":"arduino-board","device":"/dev/ttyACM0"},{"id":"de15155f.21eae8","type":"arduino in","name":"photoresistor","pin":"0","state":"ANALOG","arduino":"3e15210.fc1eae","x":464,"y":281,"z":"592aa0f3.a6d56","wires":[["47a48baa.b85b74"]]},{"id":"3cb88f3c.c3477","type":"arduino out","name":"","pin":"13","state":"OUTPUT","arduino":"3e15210.fc1eae","x":897,"y":201,"z":"592aa0f3.a6d56","wires":[]},{"id":"47a48baa.b85b74","type":"function","name":"to bool","func":"if(msg.payload<20) msg.payload = 1 \nelse msg.payload = 0\nreturn msg;","outputs":1,"x":661,"y":283,"z":"592aa0f3.a6d56","wires":[["8c9c434e.7363c","b2123986.4dedc8","3cb88f3c.c3477"]]},{"id":"b2123986.4dedc8","type":"debug","name":"","active":true,"console":"false","complete":"payload","x":857,"y":352,"z":"592aa0f3.a6d56","wires":[]},{"id":"fcf96f7.f03069","type":"mqtt out","name":" send to testRoom","topic":"testRoom","qos":"","retain":"","broker":"88ebb85c.771448","x":1513,"y":344,"z":"592aa0f3.a6d56","wires":[]},{"id":"8c9c434e.7363c","type":"function","name":"get change","func":"context.count = context.count || 0;\ncontext.state = context.state || msg.payload;\nif(msg.payload != context.state){\n\tcontext.state = msg.payload;\n\tmsg.payload=3;\n\t\n}\nreturn msg;\n","outputs":1,"x":853,"y":286,"z":"592aa0f3.a6d56","wires":[["243875f6.dbc78a"]]},{"id":"243875f6.dbc78a","type":"switch","name":"","property":"payload","rules":[{"t":"btwn","v":"0","v2":"1"},{"t":"eq","v":"3"}],"checkall":"true","outputs":2,"x":1022,"y":286,"z":"592aa0f3.a6d56","wires":[[],["8dd582c4.722a8"]]},{"id":"693c3751.96c3c8","type":"mqtt in","name":"rcv testRoom","topic":"testRoom","broker":"88ebb85c.771448","x":429,"y":92,"z":"592aa0f3.a6d56","wires":[[]]},{"id":"8dd582c4.722a8","type":"function","name":"send transform","func":"if(msg.payload == 3){\nmsg.payload = \"changed\";\nreturn msg;\n}\n","outputs":1,"x":1297,"y":343,"z":"592aa0f3.a6d56","wires":[["fcf96f7.f03069"]]}]