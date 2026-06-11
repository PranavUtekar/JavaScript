// console.log("Arrow Function in Js");

const user = {
    username: "Sammy",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sunny"
// user.welcomeMessage()

// console.log(this);

// function one output => undefined
// function one(){
//     let username = "Samay"
//     console.log(this.username);   
// }
// one()

// const chai output => undefined

// const chai = function(){
//     let username = "Samay"
//     console.log(this.username);
// }
// chai()

// below function output => {}
// const chai = () => {
//     let username = "Samay"
//     console.log(this);
// }
// chai()

// const addTwoNumbers = (num1, num2)=> num1+num2
const addTwoNumbers = (num1, num2)=> ({username: "Sammy"})


console.log(addTwoNumbers());
