//const args = process.argv;
const args = process.argv.slice(2); // cuts the 2 default values of the argv command

console.log('----> Hi there!')

function print(value, index) {
    console.log('%s: %s', index, value);
}

args.forEach(print);

//args.forEach((value, index) => {
//    console.log('%s: %s', index, value)
//});