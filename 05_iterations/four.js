const myObject = {
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    py:"Python"
}
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
    
}