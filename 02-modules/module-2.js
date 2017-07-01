console.log('module 2')

function getName() {
    return process.argv[2];
}

// expose method getName
module.exports = 
    getName
