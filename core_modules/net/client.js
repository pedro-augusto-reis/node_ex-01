var net = require('net');
var readline = require('readline');

var client = net.connect(3000);
//net.connect({host:'127.0.0.1',port: 3000});

client.on('connect',function(){
	client.write('Um novo cliente se conectou.');
});

client.on('data',function(message){
	console.log(message.toString());
});

client.on('end',function(){
	console.log('servidor> O servidor fechou.');
	process.exit();
})

/*
entrada de mensagens
*/
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

rl.on('line', function(line){
	if(!line) return;
    client.write(line)
})