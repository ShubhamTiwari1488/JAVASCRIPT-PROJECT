let cards = [];
let sum = 0;

let cardsBj = document.getElementById("cards-bj");
let sumBj = document.getElementById("sum-bj");
let messageBj = document.getElementById("message-bj");

let isAlive = false;    //Currently I am dead
let hasBlackJack = false; //Currently I don't have BlackJack

function getRandom()
{
    let num = Math.floor(Math.random()*13) + 1;

    if(num > 10)
        return 10;

    else if(num === 1)
        return 11;

    else    
        return num;
}
function startGame() {
    
    hasBlackJack = false;

    isAlive = true; //Now I am Alive

    let firstCard = getRandom();
    let secondCard = getRandom();

    cards = [firstCard,secondCard];
    console.log(cards);
    renderGame();
}

function renderGame()
{   
    sum = 0;

    cardsBj.textContent = "Cards are : ";
    for(let i = 0;i < cards.length;i++)
    {
        cardsBj.textContent += cards[i] + " ";
        sum += cards[i];
    }

    sumBj.textContent = "Sum : " + sum;

    if(sum === 21) {
        messageBj.textContent = "You have got a BlackJack!!";
        hasBlackJack = true;
    }

    else if(sum > 21) {
        messageBj.textContent = "You are out of the game!!";
        isAlive = false;
    }

    else    
        messageBj.textContent = "Draw a new Card!!"

}

function newCard()
{
    let card = getRandom();
    
    if(isAlive === true && hasBlackJack === false) {
        cards.push(card);

        renderGame();
    }

    else {
        messageBj.textContent = "START A NEW GAME!!"
    }
 
}

