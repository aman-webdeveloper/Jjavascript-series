console.log('hi loops and interation');

//for loop
// for loop is best when we know exactly how many times we need 
// to run a block of code

// syntax

// for(intilization;Condition; update){
//    // code
// }

for(let count=1; count<=5; count++){
    console.log("iteration of ", count)
}

// Addition of even numbers between 1 t0 100


// exmaple
let sum = 0;
for(let i=1; i<=100; i++)
{
    if(i%2 === 0){
        // console.log('i'); 
        // sum = sum +i;
        sum +=i;
    }
}
console.log(sum);

//anthoer exmaple
let langauge = 'javasript'

for(let i=0; i<=langauge.length; i++){
    console.log(langauge.charAt(i));
    
}

// nested loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log('row', i ," col", j);
        
    }
}

// break  : exisiting the loop so no more iteration will happen

// for(k=0; k<=5; k++){
//     if(k===3){
//         break;
//     }
//     console.log(k)
// }

//  Continue  skippig th a particular itertaion in a loop and go back and go to the next one

// for (let s=1; s<=5;s++){
//     if(s===4)
//         continue;
// console.log(s);

// }


// Multiple Counters for single loop

// for (let y=1, z=10; y<=10 && z >= 1; y++, z--){
// console.log(y,z);
// }

for(let a=0;a<=5; a++){
    for(let b=0;b<=5; b++){
        console.log(a,b)
    }
}

console.log('*');
console.log('**');
console.log('***');
console.log("****");
console.log("*****");

// while loop
// let counter =1;
// while(counter<=5){
//     console.log(counter);
//     counter++;
// }

// do while loop

//syntax
// do{
//     //code
// }
// while(condition){

// }
 let num=1;
 do{
    console.log(num);
    num++
    
 }
 while(num<=5);
