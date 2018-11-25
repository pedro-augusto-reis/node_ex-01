var interval = setInterval(function(){
	console.log('I ' + new Date());
}, 1000);

setTimeout(function(){
	clearInterval(interval);
},6000);