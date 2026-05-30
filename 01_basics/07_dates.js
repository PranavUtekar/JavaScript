console.log("Dates in Javascript");

let myDate = new Date()
console.log(myDate.toUTCString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 23)
console.log(myCreatedDate.toDateString());


let myNewDate = new Date()

console.log(myNewDate.toLocaleString("default",{
    timeZone: 'Asia/Kolkata', dateStyle:"full"
    
}));
