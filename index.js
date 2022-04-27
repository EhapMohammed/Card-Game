const notification = document.getElementById("notification"),
    cardsSum = document.getElementById("sum"),
    cardsNumber = document.getElementById("cards");
let notifiMassage = "",
    isAlive = false,
    BlackJack = false,
    sum = 0,
    cards = []

    /* get Random number for every card */
function getRandom(){
let randomNum = Math.floor(Math.random() * 13) + 1;
    if( randomNum > 10){
       return 10
    }else if (randomNum === 1){
        return 11
    }else{
        return randomNum
    }
}

    /* start game funcation  */

function startGame(){
const cardOne = getRandom(),
    cardTwo = getRandom() ;
    sum = cardOne + cardTwo;
    BlackJack = false;
    isAlive = true;
    cards = [cardOne,cardTwo];
    renderGame();
}

    /* rendering game funcation with condtions  */

function renderGame(){
    cardsNumber.textContent = "Your Cards : " ;
    cardsSum.textContent = `Cards Sum : ${sum}`;
    for(let i = 0 ; i < cards.length ; i++){  
    cardsNumber.textContent += cards[i] + " "  ;
    }
            if (sum <= 20){
                notifiMassage = " Please click new card button to Take Another Card "
            }else if(sum === 21){
                notifiMassage = " Congratulations You Win ! You Get BlackJack card";
                BlackJack = true;
            }else{
                notifiMassage = " Sorry, you lost the game ";
                isAlive = false
            }
            notification.textContent = notifiMassage
}

    /* addtional card funcation   */

function newCrad(){
    if(isAlive === true && BlackJack === false){
        const addationalCard = getRandom();
        sum += addationalCard;
        cards.push(addationalCard)
        renderGame()
    }

 }