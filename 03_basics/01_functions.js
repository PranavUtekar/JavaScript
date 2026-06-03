
// function name(){
//     console.log("A");
//     console.log("b");
//     console.log("c");
//     console.log("d");
//     console.log("e");

// }

// name()


// function addtwoNumber(number1, number2){
//     console.log(number1+number2)
// }
// function addtwoNumber(number1, number2){
//     // let result = number1+number2
//     // return result
//     return number1+number2
// }

// const result =addtwoNumber(3,4)
// console.log("Result: ",result);

function loginUserMessage(username="Anonynous"){
    if(username===undefined){
        console.log("Please enter a username");
        

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sam"))
console.log(loginUserMessage())
