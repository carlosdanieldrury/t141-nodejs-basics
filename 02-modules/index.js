//const module1 = require('./module-1')
const {sayHello} = require('./module-1')
const getName = require('./module-2')

console.log('main module')

sayHello(getName());
//console.log(module1)
//console.log(getName())
//console.log(module1.getEncapsulatedVariable())
//console.log(module1.name)

