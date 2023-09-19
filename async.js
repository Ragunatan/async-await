console.log('person 1')
console.log('person 2')
let wifeBringsTicket = new Promise ((resolve,reject) => {
    setTimeout(() => {
              resolve('ticket for person 3')  
    }, 1000);
})
let getPopcorn = wifeBringsTicket.then((t) => {
    console.log('wife: I got the tickets')
    console.log('husband:lets get in')
    console.log('wife:im hungry');
    return new Promise((resolve,reject) => {
        resolve(`${t} popcorn`)
    })
})

let getButter = getPopcorn.then((t) =>{
    console.log('I got some Popcorn')
    console.log('husband:lets get in')
    console.log('wife:i need Butter');
    return new Promise((resolve,reject) => {
        resolve(`${t} Butter`)
    })
})
getButter.then((t) => console.log(t))

console.log('person 4')
console.log('person 5')  