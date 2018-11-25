// var http = require('http');
var router = require('./router');

var app = router(3412);

var operadoras = [
  {nome: "Oi",codigo: 14, categoria: 'Celular', preco: 2},
  {nome: "Oi",codigo: 15, categoria: 'Celular', preco: 1},
  {nome: "Vivo",codigo: 41, categoria: 'Celular', preco: 3}
];

var contatos = [
  {id: 1, nome: 'Bruno', telefone: '9999-2222', data: new Date(), operadora: operadoras[0]},
  {id: 2, nome: 'Sandra', telefone: '9999-3333', data: new Date(), operadora: operadoras[1]},
  {id: 3, nome: 'Mariana', telefone: '9999-4444', data: new Date(), operadora: operadoras[2]}
];

app.interceptor(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	next(); // necessario para encadear outros interceptos
});

app.interceptor(function(req,res,next){
	res.setHeader('Content-Type','application/json;chartset=UTF-8');
	next();
});

app.get('/operadoras',function(req,res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/contatos',function(req,res){
	res.write(JSON.stringify(contatos));
	res.end();
});

/*
POST
*/
app.post('/contatos',function(req,res){
	var contato = req.body;
	contatos.push(JSON.parse(contato));
	res.end();
})

app.options('/contatos',function(req,res){
	res.end();
});

/*
old
*/
// http.createServer(function(req,res){
// 	res.setHeader('Access-Control-Allow-Origin','*');
// 	switch(req.url){
// 		case '/operadoras':
// 		  res.write(JSON.stringify(operadoras));
// 		  break;
// 		case '/contatos':
// 		  res.write(JSON.stringify(contatos));
// 		  break;
// 		default:
// 		  res.write('<html><head><title>not found</title></head><body><h1>not found</h1></body></html>');
// 	}
// 	res.end();
// }).listen(3412);