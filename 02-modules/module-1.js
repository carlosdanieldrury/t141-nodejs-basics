console.log('module 1')

let encapsulatedVariable = 'Xurupita'

function sayHello(name = "") {
    console.log(`Hi ${name}`)
}

function getEncapsulatedVariable() {
    return encapsulatedVariable
}

// expose method sayHello
module.exports = {
    sayHello,
    getEncapsulatedVariable,
    "name" : "module1"
}