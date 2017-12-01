// console.log('main.js ', require('./a.js').x);
// console.log('main.js ', require('./b.js').x);
// console.log('main.js ', require('./a.js').x);
// console.log('main.js ', require('./b.js').x);

var lib = require('./lib');

var number = require('./lib').num;
var sum_er = require('./lib').sum
console.log(number)
sum_er(number)
console.log(number)
