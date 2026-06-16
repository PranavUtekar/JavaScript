// for loop

// for (let i = 0;  i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// console.log(element);

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer Loop Values: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
        
//         // console.log(`Inner Loop Values: ${j} and Inner Loop Second Values: ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
    
// }

// break and continue

// for (let i = 0; i <=20; i++) {
//     const element = i;
//     if (i==5) {
//         console.log("Number 5 Detected");
//         break
//     }
//     console.log(element);
    
// }
for (let i = 0; i <=20; i++) {
    const element = i;
    if (i==5) {
        console.log("Number 5 Detected");
        continue
    }
    console.log(element);
    
}