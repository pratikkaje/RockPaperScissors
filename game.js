getComputerChoice();

function getComputerChoice(){
    let number = Math.random();

    console.log(number);

    if(number <= 0.3)
    {
        console.log("Rock");
        return "Rock";
    }
    else if(number > 0.3 && number <= 0.6)
    {
        console.log("Paper");
        return "Paper";
    }
    else
    {
        console.log("Scissors");
        return "Scissors";
    }    
}