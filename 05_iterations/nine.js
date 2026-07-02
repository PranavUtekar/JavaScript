const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`accumulator: ${acc}, current value: ${currval}`);
    
//     return acc+currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval)=> acc+currval, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price:299
    },
    {
        itemName: "DSA Course",
        price:999
    },
    {
        itemName: "Python Course",
        price:5999
    },
    {
        itemName: "C++ Course",
        price:199
    },
]

const priceToPay = shoppingCart.reduce( (acc, item)=>acc+item.price, 0 )
console.log(priceToPay);


const arr1 = [1,2,3,4,5,6,7,8,9,10]

const SumOfArr1 = arr1.reduce((acc, nums)=>acc+nums,0)
console.log(SumOfArr1);
