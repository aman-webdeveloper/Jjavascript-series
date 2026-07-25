// Stone paper scissors 

// Assumptions
// 1. we have to prompt the user to get theire outputs.get
// 2. the computer's selectoin will be random
// 3. we have to compare user and computer's choice 
// 4. we need to announce the winner
// after the winner annoucmment we may want toask the user to play again or quit from the game


function rockpaperscissorsgame(){
    console.log("game started");
    
    const userPrompt = prompt("Enter Rock Paper Scissor ")
    let userChoice = userPrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random()*3)+1;

    if(randomNumber === 1){
      computerChoice = 'rock'
    }

    else if (randomNumber ===2){
       computerChoice = 'paper'
    }

    else if (randomNumber === 3){
       computerChoice = 'scissor'
        
    }
    else{
        console.log('wrongoutput'); 
    }

    console.log("user choice ", userChoice);
    console.log('computer choice ', computerChoice);

    if(
        (userChoice === 'rock' && computerChoice==="scissor") ||
        (userChoice === 'paper' && computerChoice==="rock") ||
        (userChoice === 'scissor' && computerChoice==="paper")
    ){
        console.log(('you the user WIN, yay'));
    }
    else if(userChoice===computerChoice){
        console.log("game Tie");
    }

    else if (
         (userChoice === 'rock' && computerChoice==="paper") ||
        (userChoice === 'paper' && computerChoice==="scissor") ||
        (userChoice === 'scissor' && computerChoice==="rock")
    ){
        console.log('oh hn computer wins');   
    }
    else{
        console.log('please check input');
        
    }

   

}
rockpaperscissorsgame();