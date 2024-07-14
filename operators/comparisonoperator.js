console.log(10<20);
console.log(10>20);
console.log(9<=9);
console.log(8>=10);

console.log(10==10);
//js will try to conver number 10 to string 10 and hence gives true as result
console.log("10"==10);

console.log(10===10);
//js will not convert the number to string because of triple equals to
console.log("10"===10);

//is 10 not equal to 10? False, 10 is equal to 10
// != abstract not equals
console.log(10 != 10);
console.log("10" != 10);
// !== strict not equals
console.log(10 !== 10);
console.log("10" !== 10);