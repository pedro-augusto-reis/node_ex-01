console.time('primeiro');
//console.log('A ' + new Date());
setTimeout(function(){
	console.timeEnd('primeiro');
	//console.log('X ' + new Date());
},0);
//console.log('B ' + new Date());

console.time('segundo');
//console.log('C ' + new Date());
setImmediate(function(){
	console.timeEnd('segundo');
	//console.log('Z ' + new Date());
});
//console.log('D ' + new Date());