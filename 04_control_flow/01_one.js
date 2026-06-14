// if

//if(condition must be true to execute){}

// conditional operators for comparison <, >, <=, >=, ==, !==, ===


// const isUserLoggedIn = true
// if(2 =="2"){
//     console.log("executed");
// }

// const power = 1000

// if (power>500) {
//     const ability = "Fly"
//     if(power>750){
//         const abilityTwo = "Strength"
//         console.log(`Users Ability:${ability + abilityTwo}`);
        
//     }
// }


const userLoggedIn = true
const userDebitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && userDebitCard) {
    console.log("Allowed To Purchase Course");
    
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("Allowed to Access");
    
}