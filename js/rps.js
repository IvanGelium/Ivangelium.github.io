let frame = 0;
const playerClick =  document.querySelectorAll('button');
const playerPlace = document.querySelector('#player-cont');
const botPlace = document.querySelector('#bot-cont');
const vsPlace = document.querySelector('#vs-cont');
let playerChoice;
let bot;
let winner;

const rockSvg = document.createElement("img");
rockSvg.className = "temperary";
rockSvg.src = "../img/rock.svg";
rockSvg.style.height = "100%";
rockSvg.style.width = "100%" ;
// botPlace.appendChild(rockSvg);

const papperSvg = document.createElement("img");
papperSvg.className = "temperary";
papperSvg.src = "../img/papper.svg";
papperSvg.style.height = "100%";
papperSvg.style.width = "100%" ;
// playerPlace.appendChild(papperSvg);

const scissorsSvg = document.createElement("img");
scissorsSvg.className = "temperary";
scissorsSvg.src = "../img/scissor.svg";
scissorsSvg.style.height = "100%";
scissorsSvg.style.width = "100%" ;
// playerPlace.appendChild(scissorsSvg);

// Элементы игрока 

const pRockSvg = document.createElement("img");
pRockSvg.className = "temperary";
pRockSvg.src = "../img/rock.svg";
pRockSvg.style.height = "100%";
pRockSvg.style.width = "100%" ;
// botPlace.appendChild(pRockSvg);

const pPapperSvg = document.createElement("img");
pPapperSvg.className = "temperary";
pPapperSvg.src = "../img/papper.svg";
pPapperSvg.style.height = "100%";
pPapperSvg.style.width = "100%" ;
// playerPlace.appendChild(pPapperSvg);

const pScissorsSvg = document.createElement("img");
pScissorsSvg.className = "temperary";
pScissorsSvg.src = "../img/scissor.svg";
pScissorsSvg.style.height = "100%";
pScissorsSvg.style.width = "100%" ;
// playerPlace.appendChild(pScissorsSvg);
document.onload = animation();
// button elements 
const nextRoundButtonLose = document.createElement("button");
nextRoundButtonLose.className = "tmp";
nextRoundButtonLose.style.border = "5px solid red"
nextRoundButtonLose.style.background = "black";
nextRoundButtonLose.style.fontSize = "50px";
nextRoundButtonLose.style.color = "red";
nextRoundButtonLose.style.height = "20%";
nextRoundButtonLose.textContent = "Поражение!"

// vsPlace.appendChild(nextRoundButtonLose);

const nextRoundButtonWin = document.createElement("button");
nextRoundButtonWin.className = "tmp";
nextRoundButtonWin.style.border = "5px solid green"
nextRoundButtonWin.style.background = "black";
nextRoundButtonWin.style.fontSize = "50px";
nextRoundButtonWin.style.color = "green";
nextRoundButtonWin.style.height = "20%";
nextRoundButtonWin.textContent = "Триумф!"

// vsPlace.appendChild(nextRoundButtonWin);

const nextRoundButtonTie = document.createElement("button");
nextRoundButtonTie.className = "tmp";
nextRoundButtonTie.style.border = "5px solid yellow"
nextRoundButtonTie.style.background = "black";
nextRoundButtonTie.style.fontSize = "50px";
nextRoundButtonTie.style.color = "yellow";
nextRoundButtonTie.style.height = "20%";
nextRoundButtonTie.textContent = "Паритет..."

// vsPlace.appendChild(nextRoundButtonTie);


playerClick.forEach(button => button.addEventListener("click", (e)=>{
    switch (e.target.className) {
        case "R":
            console.log(1);
            clearPlayer();
            playerPlace.appendChild(pRockSvg);
            clearInterval(intID);
            clearBot();
            bot = getBot();
            appendBot (bot);
            chkWinner(1, bot);
            nextRound (winner);
            break;
        case "P":
            console.log(2);
            clearPlayer();
            playerPlace.appendChild(pPapperSvg);
            clearInterval(intID);
            clearBot();
            bot = getBot();
            appendBot (bot);
            chkWinner(2,bot);
            nextRound (winner);
            break;
        case "S":
            console.log(3);
            clearPlayer();
            playerPlace.appendChild(pScissorsSvg);
            clearInterval(intID);
            clearBot();
            bot = getBot();
            appendBot (bot);
            chkWinner(3, bot);
            nextRound (winner);
            break;
        default:
            console.log('suck some dicks');
    }
}))

function animation () {
    intID = setInterval(() => {
        switch (frame) {
            case 1:
                clearBot();
                botPlace.appendChild(rockSvg);
                frame++;
                break;
            case 2:
                botPlace.removeChild(rockSvg)
                frame++;
                botPlace.appendChild(papperSvg);
                break;
            case 3:
                botPlace.removeChild(papperSvg)
                frame = 1;
                botPlace.appendChild(scissorsSvg);
                break;
            default:
                frame = 1;
                break;
        }
    }, 100);
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
                winner = 1;
                break;
            case 2:
                winner = 0;
                break;
        }
        
    } else if (bot > player){
        switch (bot - player){
            case 1:
                winner = 0;
                break;
            case 2:
                winner = 1;
                break;
        }
    } else {
        winner = 2;
    } 
}

function clearPlayer () {
    if (playerPlace.firstChild === null || playerPlace.firstChild.className === "temperary") {
        if (playerPlace.firstChild === null) {
        } else {
            if (playerPlace.firstChild.className === "temperary") {
                playerPlace.removeChild(playerPlace.firstChild)
            }}}

}

function clearBot (){
    if (botPlace.firstChild === null || botPlace.firstChild.className === "temperary") {
        if (botPlace.firstChild === null) {
        } else {
            if (botPlace.firstChild.className === "temperary") {
                botPlace.removeChild(botPlace.firstChild)
            }}}
}

function appendBot(bot) {
    switch (bot) {
        case 1:
            botPlace.appendChild(rockSvg);
            break;
        case 2:
            botPlace.appendChild(papperSvg);
            break;
        case 3:
            botPlace.appendChild(scissorsSvg);
            break;
        default:
            console.log("suck some dicks");
    }
}

function nextRound (winner) {
    vsPlace.removeChild(vsPlace.firstElementChild);
    switch (winner) {
        case 0:
            vsPlace.appendChild(nextRoundButtonLose);
            break;
        case 1:
            vsPlace.appendChild(nextRoundButtonWin);
            break;
        case 2:
            vsPlace.appendChild(nextRoundButtonTie);
            break;
        default:
            console.log("suck some dicks");
    }
}
