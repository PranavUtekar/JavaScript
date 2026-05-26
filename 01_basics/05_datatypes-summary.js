// Primitive


// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 1516516151615815151n
//console.log(BigNumber);

// Reference(Non Primitive)

// Arrays, Objects, Functions


const heros = ["shaktiman", "krish"]
let obj= {
    name: "FlyingJatt",
    age: 32,
}
const myfunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);




