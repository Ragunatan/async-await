const { log } = require("async");

console.log('Person 1 : shows ticket');
console.log('Person 2 : shows ticket');

const preMovie = async () => {
    'Premovie'
}
preMovie().then((m)=> console.log(m) )

console.log('Person 4 : shows ticket');
console.log('Person 5 : shows ticket');