var serialGenerator = require('./serialGenerator.js');
var serialGeneratorA = require('./serialGenerator.js');
var serialGeneratorB = require('./serialGenerator.js');
console.log(serialGenerator.generate());
console.log(serialGeneratorA === serialGeneratorB);