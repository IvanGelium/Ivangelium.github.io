const win = "You win, machoboy!"
const lose = "You lose, sucker!"
let bot;

function getPlayer () {
    playerChoice = prompt("Введите номер символа: ","(камень - 1|ножницы - 2|бумага - 3");
    return +playerChoice;
}

function validatePlayerChoice(playerChoice) {
    if (playerChoice < 0 || playerChoice > 3){
        return true;
    } else if (Number.isNaN(playerChoice) || typeof 1 !== typeof playerChoice) {
        return true;
    } else {
        return false;
    }
}

function getBot() {
    let x = Math.floor(Math.random()* 3 + 1);
    console.log ("bot выкинул "+ x);
    return x;
}

function chkWinner(player,bot){
    if (player > bot) {
        switch (player - bot){
            case 1:
                alert(lose);
                break;
            case 2:
                alert(win);
                break;
        }
        
    } else if (bot > player){
        switch (bot - player){
            case 1:
                alert(win);
                break;
            case 2:
                alert(lose);
                break;
        }
    } else {
        alert("It's tie! Booooooring.")
    } 
}

function rps(){
    playerChoice = getPlayer();
    playerStupid = validatePlayerChoice(playerChoice)
    if (playerStupid) {
        alert("Are you actually stupid? Try again.")
    }
    else {
        chkWinner(playerChoice, getBot());
    }

}
