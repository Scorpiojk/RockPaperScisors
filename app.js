

function playRound(playerSelection, computerSelection){

//----------------------------------------------------------//

    const game = Array("rock", "paper", "scisors");
    var computerSelection = game[Math.floor(Math.random()*game.length)];

//----------------------------------------------------------//    

        var playerSelection =prompt("rock - paper - scisors");

/*    console.log(computerSelection);

    

        if(playerSelection.toLowerCase() == "rock"){
                console.log("rock")
        }else if(playerSelection.toLowerCase() == "paper"){
                console.log("paper")
        }else if(playerSelection.toLowerCase() == "scisors"){
                console.log("scisors")
        }else{console.log("null")}

*/
//---------------------------------------------------------//    

              if(playerSelection =="rock", computerSelection == "paper"){
                console.log("computer wins")
        }else if(playerSelection =="rock", computerSelection == "scisors"){
                console.log("player wins")
        }else if(playerSelection =="rock", computerSelection == "rock"){
                console.log("tie")
        }else if(playerSelection =="paper", computerSelection =="paper"){
                console.log("tie")
        }else if(playerSelection =="paper", computerSelection == "scisors"){
                console.log("computer wins")
        }else if(playerSelection == "paper", computerSelection == "rock"){
                console.log("player wins")
        }else if(playerSelection == "scisors", computerSelection == "paper"){
                console.log("player wins")
        }else if(playerSelection == "scisors", computerSelection == "scisors"){
                console.log("tie")
        }else if(playerSelection == "scisors", computerSelection == "rock"){
                console.log("computer wins")
        }
}

//-----------------------------------------------------------------------------//



playRound()
playRound()
playRound()
playRound()
playRound()
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


/*player Selection
    make an alert to write rock paper or scisors
        if is scisors
                play scisors
        if is paper
                play paper
        if is rock
                play rock
        else
                wrong word
  computer selection
    you have to choicen beetween rock paper and scisors

  play a round
    if player selection is rock and computer paper 
            computer wins
    if player selection is rock and computer scisors
            player wins
    if player selection is rock and computer rock
            tie
*/