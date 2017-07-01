const fs = require('fs')

// please do not do this, if you dare do this you are going to lose nodejs powers
//const fileContent = fs.readFileSync('./students.txt', 'utf8' )
//console.log(fileContent)
console.log('Waiting 0...')

function printFileContent(error, data) {
    if (error) { 
        console.log('File not found')
        return;
    } //throw error
    console.log(data)
}
fs.readFile('./students.txt', 'utf8', printFileContent)
console.log('Waiting...')