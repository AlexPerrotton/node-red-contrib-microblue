var microblue = require('microblue');

    module.exports = function(RED){

        function ReadUart(n){
            RED.nodes.createNode(this,n);
            var node = this;
            this.name = n.name;

	    microblue.connect(function(){
		node.status({fill:"blue", shape:"dot", text:"Connect"});
		var intervalFunc = setInterval(function(){
               	    microblue.read(function(data){
            		node.send({topic:"micro:bit/"+node.name, payload:data});
            	    });
                }, 1000);
	    });

            node.on("close", function(done){
                node.status({fill:"grey", shape:"dot", text:"Disconnect"});
                this.sensor(function(){
                    done();
                });
            });
        }

        RED.nodes.registerType("ReadUart", ReadUart);

        function WriteUart(n){
            RED.nodes.createNode(this,n);
            var node = this;
            this.name = n.name;

	    microblue.connect(function(){
		node.status({fill:"blue", shape:"dot", text:"Connect"});
	    });

	    node.on('input', function(msg){
            	var data = Buffer.from(msg.payload);
            	microblue.write(data);
            });

            node.on("close", function(done){
                node.status({fill:"grey", shape:"dot", text:"Disconnect"});
                this.sensor(function(){
                    done();
                });
            });
        }
	
        RED.nodes.registerType("WriteUart", WriteUart);
	    
	function ReadAccel(n){
            RED.nodes.createNode(this,n);
            var node = this;
            this.name = n.name;
		
	    microblue.connect(function(){
            node.status({fill:"blue", shape:"dot", text:"Connect"});
            var intervalFunc = setInterval(function(){
                microblue.accelerometer(function(data){
                    node.send({topic:"micro:bit/"+node.name, payload:data});
                });
            }, 500);
            });

            node.on("close", function(done){
                node.status({fill:"grey", shape:"dot", text:"Disconnect"});
                this.sensor(function(){
                    done();
                });
            });
        }

        RED.nodes.registerType("ReadAccel", ReadAccel);

        function ReadCompass(n){
            RED.nodes.createNode(this,n);
            var node = this;
            this.name = n.name;

            microblue.connect(function(){
                node.status({fill:"blue", shape:"dot", text:"Connect"});
                var intervalFunc = setInterval(function(){
                    microblue.compass(function(data){
                        node.send({topic:"micro:bit/"+node.name, payload:data});
                    });
                }, 500);
            });

            node.on("close", function(done){
                node.status({fill:"grey", shape:"dot", text:"Disconnect"});
                this.sensor(function(){
                    done();
                });
            });
        }

        RED.nodes.registerType("ReadCompass", ReadCompass);
	    
	function Compass_Accel(n){
            RED.nodes.createNode(this,n);
            var node = this;
            this.name = n.name;

            microblue.connect(function(){
                node.status({fill:"blue", shape:"dot", text:"Connect"});
                var intervalFunc = setInterval(function(){
                    microblue.compass(function(data_compass){
                        microblue.accelerometer(function(data_accel){
                                node.send({topic:"micro:bit/"+node.name, payload:{"Compass":[data_compass],"Accelerometer":[data_accel]}});
                        });
                    });
                }, 500);
            });

            node.on("close", function(done){
                node.status({fill:"grey", shape:"dot", text:"Disconnect"});
                this.sensor(function(){
                    done();
                });
            });
        }

        RED.nodes.registerType("Compass_Accel", Compass_Accel);

    }


