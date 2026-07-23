console.log('funtions in js DAY 6');


//Synatx 
// function printThis(){
// code
// }

// call or invoke a function
// printThis()

// functipn exmaple 

function PrintThis(){
    console.log("Print me I'm function");
}
PrintThis();

//function as an expression

let printme = function(){
    console.log('print me as  an expression ');
}
printme()
console.log(printme);


// parmaters and arguments

function sum(a,b){  // the input that we pass to a function while declarig it or defining it is called the paramaters and they also called paramters
    const result = a+b;
    // console.log(result);
    return result;
}
// sum(10,14); // the value we give to the paramters is known as the argumnets

// return statements 

let result = sum(10,9);
console.log(result)

function double(x) {
    return 2*x;
}
console.log(double(result));


// Default paramters

function calc(a,b=0){
    return(2*(a+b))
}

const resvar =calc(2,8)
console.log(resvar);

// if we dont define anything like in argumnet sthe it wil print NAN bexause 2 + undefined = undfdined 
// but we declared b as default parametsr then it will automctaiclly take te default if we dont pass the vales in the argyuments 
// but if write the value in the arguments it will overwrite the default paramters values that is priviously is 0



// rest paramter

//syntax ... rest

function calcluatethis(x,y,...rest){
console.log(x,y,rest);

}
calcluatethis(1,2,3,4,4,5,6,7,7,8)






