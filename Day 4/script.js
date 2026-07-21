console.log("DAY 4 Control flow ")

//Syntax
// if(condition){

// }
// else{

// }


// example 1
let eductaion_minister_resign = true

if (eductaion_minister_resign) {
    console.log("india future will be secure")
}
else {
    console.log("otherwise not ")
}

//example 2
const age = 17;

if (age >= 18) {
    console.log('eligible to vote');
}

else {
    console.log('not eligible to vote');
}

// Let's Build the grading system 
// if score >=90 Grade A
// if score >=70 Grade B
// if score >=60 Grade C
// if score >=40 Grade D
// if score >=30 Fail


const Score = 40;

if (Score >= 90) {
    console.log('Grade A');
}
else if (Score >= 70) {
    console.log('Grade B');
}
else if (Score >= 60) {
    console.log('Grade c');
}
else if (Score >= 40) {
    console.log('Grade d');
}
else {
    console.log('Fail')
}


// switch case 

const Day = 3;

switch (Day) {
    case 1:
        console.log('Today is monday')
        break;
    case 2:
        console.log('Today is tuesday')
        break;
    case 3:
        console.log('Today is wednesday')
        break;
    case 4:
        console.log('Today is thrusday')
        break;
    case 5:
        console.log('Today is friday')
        break;
    case 6:
        console.log('Today is saturday')
        break;
    default: console.log('Day is not specifed')
}

// swicth case example

let name = "tapascript"

switch (name) {
    case 'tapascript':
        console.log('js series')
        break;
    case 'codwwithchai':
        console.log('apna chai code');
        break;

    default:
        console.log('nor the tapascript nor the coewith chai')
}

// another example testing 

let place = 'gk'

switch (place) {
    case 'banglore':
    case 'rajasthan':
    case 'bihar':
    case 'uttrakhand':
        console.log('all place in india')
        break;

    case 'uk':
        console.log('its uk')
        break;

    default:
        console.log('nor uk not india');


}





