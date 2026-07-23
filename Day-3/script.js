// Arithmetic operators 

let count = 5;
console.log(++count);
console.log(count)

// Assignment operator
let x = 10;
x = x + 5; // 15
x = x - 3; // 12
x *= 2; // 24
x /=4; // 6


// comparison operators

console.log(4==5);
console.log(0 == false);
console.log(3=='3');
console.log(3==='3');

console.log(null === null)
console.log(undefined===undefined)

// Nan Not a number 

let obj1 = {'name' : 'tapsacript'}
let obj2 = {'name' : 'tapascript'}

console.log(obj1 == obj2 )
console.log(obj1 !== obj2 )

// compariosn operator
4>3

// logical operator
// && and 
// || or 
// ?? opossite

console.log(false && false)
console.log(true && false)
console.log(true && false)
console.log(false && true)

// if both are true in and then it will be true 
// if one is false thenit will be false

console.log('cow' && 'horse') // here horse 

4>5 && 4===6;

// or ||

console.log(false || false)
console.log(true || false)
console.log(true || false)
console.log(false||  true)

console.log('cow'|| 'horse'); // here cow 

console.log(!false)


// ?? nullish 

let a1 =null ?? 1; //1
let a2 = undefined?? 3//3
const a3 = false ?? 'aman'// false
const a4 = 0?? 'kumar' //0

// conditional ternary operator

console.log(" conditional ternary operators")

// cpnditional ? val1 : val2

let age = 18;
age >=18 ? "eligble to vote" : "not elgible"

// bitwise opearators
console.log('bitwise operators')



