const userEmail = "s@google.com"

if (userEmail) {
    console.log("Got user Email");
} else{
    console.log("Didnt recieve Email");
    
}

// falsey values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}, 

// Nullish Coalescing Operator: null, undefined

let val1;
// val1= 5??10
// val1 = null??10
// val1 = undefined??10
val1 = undefined??10??5

console.log(val1);


// terniary operator

// condition ? true : false

const TeaPrice = 180;

TeaPrice<100 ? console.log("Tea is under 100"): console.log("Tea is above 100");

