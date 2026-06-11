// console.log("Learning Scopes in Js");

// if(true){
//     let a =10 
//     const b =20
//     var c=30

// }
// console.log(a, b, c);

// let a = 300

// if(true){
//     let a =30
//     console.log("Inner: ",a);
    
// }

// console.log("Outer: ", a);


// function one(){
//     const username = "Sam"
//     function two(){
//         const website = "Youtube"
//         console.log(username);       
//     } 
//     // console.log(website);
//     two()
// }
// one()



// if(true){
//     const username = "Sammy"
//     if(username == "Sammy"){
//         const website = " Google"
//         console.log(username + website);
//     }
// }

console.log(addone(5))

function addone(num){
    return num +1
}

const addtwo = function (num){
    return num +2
}
console.log(addtwo(10))

