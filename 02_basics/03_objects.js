// singleton

// object literals

// Object.create = constructor method

const mySym = Symbol("key1")
const newNum = Number("1234")

const Jsuser = {
    name: "Pranav",
    "Full name": "Pranav Utekar",
    [mySym]: "Mykey1",
    [newNum]: "5678",
    age: 18,
    location: "Mumbai",
    email: "pranav@google.com",
    isLoggedIn: false,
    lastlogindays: ["Monday", "Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["Full name"])
console.log(Jsuser["email"])

console.log(Jsuser[mySym])
console.log(typeof Jsuser[mySym])

console.log(Jsuser[newNum])
console.log(typeof Jsuser[newNum])

Jsuser.email = "pranav@microsoft.com"
console.log(Jsuser);

// Object.freeze(Jsuser)
Jsuser["Full name"]="Abhinav Utekar"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(Jsuser.greeting);

Jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());





