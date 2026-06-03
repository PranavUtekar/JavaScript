
function name(){
    console.log("A");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");

}

name()


function addtwoNumber(number1, number2){
    console.log(number1+number2)
}
function addtwoNumber(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}

const result =addtwoNumber(3,4)
console.log("Result: ",result);

function loginUserMessage(username="Anonynous"){
    if(username===undefined){
        console.log("Please enter a username");
        

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sam"))
console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 600, 800, 1000))

const user = {
    username:"Sammy",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is: ${anyobject.username} and  Price is ${anyobject.price}`);
    
}
// handleObject(user)

handleObject({
    username:"Sam",
    price:399
})

const myNewArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

const myNewArr = [200, 400, 600]
const mysecondNewArray = [1,2,3]
function returnSecondValue(get){
    return get[1]
}

console.log(returnSecondValue(mysecondNewArray));
