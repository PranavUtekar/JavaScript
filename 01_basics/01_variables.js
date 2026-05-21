const account_Id = 123456
let account_Email = "pranav@google.com"
var account_Password = "123456"
account_City = "Mumbai"

// account_Id = 2 // Not allowed
account_Email = "pu@gmail.com"
account_Password = "456789"
account_City = "Dehli"
let account_State;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(account_Id);
console.table({account_Email, account_Password, account_City, account_Id, account_State })
