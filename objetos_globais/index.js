var serialGenerator = require('./serialGenerator');
console.log(serialGenerator.generate());

/*
três estratégias para passar a variável max para o serialGenerator
utilizando qualquer uma das quatro ela estará sendo criada no escopo global
*/
// global.max = 10000;
// GLOBAL.max = 10000;
// root.max = 10000;
// se criar a variavel sem utilizar o var, ela será global;