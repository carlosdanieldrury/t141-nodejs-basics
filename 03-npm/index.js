const string = require('useful-string')
const _ = require('lodash')

console.log(string.toCamelCase("carlos drury"))

_.times(4, () => {
    console.log("id: ", string.guid())
} )