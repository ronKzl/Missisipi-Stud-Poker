cardData = [
    {
      "suit": "H",
      "value": 2,
      "file": "2_of_hearts.png"
    },
    {
      "suit": "H",
      "value": 3,
      "file": "3_of_hearts.png"
    },
    {
      "suit": "H",
      "value": 4,
      "file": "4_of_hearts.png"
    },
    {
      "suit": "H",
      "value": 5,
      "file": "5_of_hearts.png"
    },
    {
      "suit": "H",
      "value": 6,
      "file": "6_of_hearts.png"
    },
    {
      "suit": "H",
      "value": 7,
      "file": "7_of_hearts.png"
    },
    {
      "suit": "H",
      "value": 8,
      "file": "8_of_hearts.png"
    },
    {
      "suit": "H",
      "value": 9,
      "file": "9_of_hearts.png"
    },
    {
      "suit": "H",
      "value": "T",
      "file": "10_of_hearts.png"
    },
    {
      "suit": "H",
      "value": "J",
      "file": "jack_of_hearts.png"
    },
    {
      "suit": "H",
      "value": "Q",
      "file": "queen_of_hearts.png"
    },
    {
      "suit": "H",
      "value": "K",
      "file": "king_of_hearts.png"
    },
    {
      "suit": "H",
      "value": "A",
      "file": "ace_of_hearts.png"
    },
    {
      "suit": "D",
      "value": 2,
      "file": "2_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": 3,
      "file": "3_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": 4,
      "file": "4_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": 5,
      "file": "5_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": 6,
      "file": "6_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": 7,
      "file": "7_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": 8,
      "file": "8_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": 9,
      "file": "9_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": "T",
      "file": "10_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": "J",
      "file": "jack_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": "Q",
      "file": "queen_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": "K",
      "file": "king_of_diamonds.png"
    },
    {
      "suit": "D",
      "value": "A",
      "file": "ace_of_diamonds.png"
    },
    {
      "suit": "C",
      "value": 2,
      "file": "2_of_clubs.png"
    },
    {
      "suit": "C",
      "value": 3,
      "file": "3_of_clubs.png"
    },
    {
      "suit": "C",
      "value": 4,
      "file": "4_of_clubs.png"
    },
    {
      "suit": "C",
      "value": 5,
      "file": "5_of_clubs.png"
    },
    {
      "suit": "C",
      "value": 6,
      "file": "6_of_clubs.png"
    },
    {
      "suit": "C",
      "value": 7,
      "file": "7_of_clubs.png"
    },
    {
      "suit": "C",
      "value": 8,
      "file": "8_of_clubs.png"
    },
    {
      "suit": "C",
      "value": 9,
      "file": "9_of_clubs.png"
    },
    {
      "suit": "C",
      "value": "T",
      "file": "10_of_clubs.png"
    },
    {
      "suit": "C",
      "value": "J",
      "file": "jack_of_clubs.png"
    },
    {
      "suit": "C",
      "value": "Q",
      "file": "queen_of_clubs.png"
    },
    {
      "suit": "C",
      "value": "K",
      "file": "king_of_clubs.png"
    },
    {
      "suit": "C",
      "value": "A",
      "file": "ace_of_clubs.png"
    },
    {
      "suit": "S",
      "value": 2,
      "file": "2_of_spades.png"
    },
    {
      "suit": "S",
      "value": 3,
      "file": "3_of_spades.png"
    },
    {
      "suit": "S",
      "value": 4,
      "file": "4_of_spades.png"
    },
    {
      "suit": "S",
      "value": 5,
      "file": "5_of_spades.png"
    },
    {
      "suit": "S",
      "value": 6,
      "file": "6_of_spades.png"
    },
    {
      "suit": "S",
      "value": 7,
      "file": "7_of_spades.png"
    },
    {
      "suit": "S",
      "value": 8,
      "file": "8_of_spades.png"
    },
    {
      "suit": "S",
      "value": 9,
      "file": "9_of_spades.png"
    },
    {
      "suit": "S",
      "value": "T",
      "file": "10_of_spades.png"
    },
    {
      "suit": "S",
      "value": "J",
      "file": "jack_of_spades.png"
    },
    {
      "suit": "S",
      "value": "Q",
      "file": "queen_of_spades.png"
    },
    {
      "suit": "S",
      "value": "K",
      "file": "king_of_spades.png"
    },
    {
      "suit": "S",
      "value": "A",
      "file": "ace_of_spades.png"
    }
  ]

//game variables to track user earnings and stats
let playerMoney = 1000;
let handsPlayed = 0;
let ante = 25;
let sideBet = 0
let thirdBet = 0;
let fourthBet = 0;
let fifthBet = 0;


const SUIT_POS = 1;
const RANK_POS = 0;
let currentCards = [];
let currentCardNum = [];
let amountRevealed = 0;


let highAceCardOrderMap = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "T":10,"J":11, "Q":12, "K":13, "A":14}

let lowAceCardOrderMap = {"A":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "T":10,"J":11, "Q":12, "K":13}

function sortNum(a,b){
    return a-b;
}

function getSortedRanks(hand){
    handnums = [];
    for(i = 0; i < hand.length; i++){
        handnums[i] = hand[i][RANK_POS];
        handnums[i] = highAceCardOrderMap[handnums[i]]
    }
    handnums.sort(sortNum);
    return handnums;
}

function check_royal_flush(hand){
    if(check_straight_flush(hand)){
        handnums = getSortedRanks(hand);
        if (handnums.includes(13) && handnums.includes(14)){
            return true;
        }
    }
    return false;
}

function check_straight_flush(hand) {
    if(check_flush(hand) && check_straight(hand)){
        return true;
    }
    return false
}

function check_flush(hand) {
    startCard = hand[RANK_POS][SUIT_POS];
    for(let i = 1; i < hand.length; i++){
        if(startCard != hand[i][SUIT_POS]){
            return false;
        }
    }
    return true;
}

function check_high_ace_straight(hand) {
    handnums = getSortedRanks(hand)
    
    for(i = 1; i < handnums.length; i++){
        if(handnums[i-1] +1 != handnums[i]){
            return false;
        }
    }
    return true;
}

function check_low_ace_straight(hand) {
    handnums = [];
    for(i = 0; i < hand.length; i++){
        handnums[i] = hand[i][RANK_POS];
        handnums[i] = lowAceCardOrderMap[handnums[i]]
    }
    handnums.sort(sortNum);

    for(i = 1; i < handnums.length; i++){
        if(handnums[i-1] +1 != handnums[i]){
            return false;
        }
    }
    return true;
}

function check_straight(hand){
    return(check_high_ace_straight(hand) || check_low_ace_straight(hand));
}

function check_quads(hand){
    handnums = getSortedRanks(hand);
    for(i = 0; i < 2; i++){
        if(handnums[i] == handnums[i+1] && handnums[i] == handnums[i+2] && handnums[i] == handnums[i+3]){
            return true;
        }
    }
    return false
}

function check_full_house(hand){
    handnums = getSortedRanks(hand);
    if(handnums[0] == handnums[1] && handnums[0] == handnums[2] && handnums[3] == handnums[4]){
        return true;
    }
    if(handnums[0] == handnums[1] && handnums[2] == handnums[3] && handnums[2] == handnums[4]){
        return true;
    }
    return false;
}

function check_trips(hand){
    handnums = getSortedRanks(hand);
    for(i = 0; i < 3; i++){
        if(handnums[i] == handnums[i+1] && handnums[i] == handnums[i+2]){
            return true;
        }
    }
    return false
}

function check_two_pair(hand){
    handnums = getSortedRanks(hand);
    for(i = 0; i < 4; i++){
        if(handnums[i] == handnums[i+1]){
            handnums.splice(i, 2);
            for(j = 0; j < 2; j++){
                if (handnums[j] == handnums[j+1]){
                    return true
                }
            }
            return false;
        }
    }
    return false
}

function check_high_pair(hand){
    handnums = getSortedRanks(hand);
    for(i = 0; i < 4; i++){
        if(handnums[i] == handnums[i+1] && handnums[i] > 10){
            return true;
        }
    }
    return false
}

function check_mid_pair(hand){
    handnums = getSortedRanks(hand);
    for(i = 0; i < 4; i++){
        if(handnums[i] == handnums[i+1] && handnums[i] < 11 && handnums[i] > 5){
            return true;
        }
    }
    return false
}

function findPayout(hand){
    if(check_royal_flush(hand)){
        return 500;
    }
    if(check_straight_flush(hand)){
        return 100;
    }
    if(check_quads(hand)){
        return 40;
    }
    if(check_full_house(hand)){
        return 10;
    }
    if(check_flush(hand)){
        return 6;
    }
    if(check_straight(hand)){
        return 4;
    }
    if(check_trips(hand)){
        return 3;
    }
    if(check_two_pair(hand)){
        return 2;
    }
    if(check_high_pair(hand)){
        return 1;
    }
    if(check_mid_pair(hand)){
        return 0;
    }
    return -1;
}

function dealCard(){
    while(true){
        x = Math.floor(Math.random()*52)
        if(!currentCardNum.includes(x)){
            break;
        }
    }
    currentCards.push(cardData[x]["value"] + cardData[x]["suit"] )
    currentCardNum.push(x);
}




//return the correct picture corresponding to the card in the array from the JSON file
function getPicture(cardPosition){
  for(let i = 0; i < 52; i++){
    if(cardData[i].suit == currentCards[cardPosition][1] && cardData[i].value == currentCards[cardPosition][0]){
      let card = "./PNG-cards-1.3/" + cardData[i].file;
      return card;
    }
  }
}

//On doucument load evens

//disable Play buttons
disablePlayButtons();
updateUserBalance();



//Get the 5 cards on load
const card = document.getElementById("card");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");

//Snippet to set a picture so I don't forget
document.getElementById("thirdStImg").src ="PNG-cards-1.3\\2_of_diamonds.png";

//Current workaround for the first 2 cards not displaying properly without having text below them...
document.getElementById("b").style.color = "#5f8a6a";
document.getElementById("a").style.color = "#5f8a6a";

//set up event listeners for the buttons
document.getElementById("deal").addEventListener("click", dealBtn);
document.getElementById("fold").addEventListener("click", fold);
document.getElementById("x1").addEventListener("click", increaseBetx1);
document.getElementById("x2").addEventListener("click", increaseBetx2);
document.getElementById("x3").addEventListener("click", increaseBetx3);
document.getElementById("reset").addEventListener("click",resetUserMoney);

//Increase bets functions
function increaseBetx1(){
  let moneyBet = ante * 1;
  putBet(moneyBet);
}

function increaseBetx2(){
  let moneyBet = ante * 2;
  putBet(moneyBet);
}

function increaseBetx3(){
  let moneyBet = ante * 3;
  putBet(moneyBet);
}

//sets the appropriate bet depending on how many cards are revealed to the amount given
function putBet(betAmount){
  if(amountRevealed === 2){
    thirdBet = betAmount;
    document.getElementById("bet3").textContent = `${betAmount}$`
  }
  if(amountRevealed === 3){
    fourthBet = betAmount;
    document.getElementById("bet4").textContent = `${betAmount}$`
  }
  if(amountRevealed === 4){
    fifthBet = betAmount;
    document.getElementById("bet5").textContent = `${betAmount}$`
  }
  //displayCards
  console.log(thirdBet)
  console.log(fourthBet)
  console.log(fifthBet)
  flipCard();
}




//Sets up the game
function dealBtn() {
  //Draw 5 random cards from the Json
  dealCard();
  dealCard();
  dealCard();
  dealCard();
  dealCard();
  console.log(currentCards);
  document.getElementById("firstStImg").src = getPicture(0);
  document.getElementById("secondStImg").src = getPicture(1);
  document.getElementById("thirdStImg").src = getPicture(2);
  document.getElementById("fourthStImg").src = getPicture(3);
  document.getElementById("fifthStImg").src = getPicture(4);
  
  //Lock In the Ante & 3 card bet of user

  //Flip the first 2 cards
  flipFirstAndSecond();
  //Disable the dealButton
  document.getElementById("deal").disabled = true;
  //Enebale the other 4 buttons
  enablePlayButtons();
  amountRevealed = 2;
}


//flip 1 card a time depending on the amount of cards revealed on the table
function flipCard(){
    if(amountRevealed === 2){
      flipThirdStreet();
      amountRevealed++;
      return;
    }
    if(amountRevealed === 3){
      flipFourthStreet();
      amountRevealed++;
      return;
    }
    if(amountRevealed === 4){
      flipFifthStreet();
      amountRevealed++;
      return;
    }
}



//called when the fold button is pressed
//cleans up the user UI for a new round and adjusts money accordingly
function fold() {
  let thirdCardShowing = 3;
  let fourthCardShowing = 4;
  let fifthCardShowing = 5;
  //always flip the 2 first cards
  flipFirstAndSecond();
  //then depending on the amount of cards revealed which would be tracked
  if (amountRevealed >= thirdCardShowing) {
    flipThirdStreet();
  }
  if (amountRevealed >= fourthCardShowing) {
    flipFourthStreet();
  }
  if (amountRevealed >= fifthCardShowing) {
    flipFifthStreet();
  }
  //set amount of cards visible back to 0
  amountRevealed = 0;
  //disable the buttons
  disablePlayButtons();
  //enable the deal button back up again
  document.getElementById("deal").disabled = false;
  //clear the money labels
  document.getElementById("bet3").textContent = `$`;
  document.getElementById("bet4").textContent = `$`;
  document.getElementById("bet5").textContent = `$`;

  //enable Ante and third card bet back up again

  //calc user loss
  let loss = ante + sideBet + thirdBet + fourthBet + fifthBet;
  playerMoney = playerMoney - loss;
  handsPlayed++;
  if(playerMoney < 0){
    alert("You went broke - reseting the game")
    resetUserMoney();
  }
  else{
    updateUserBalance();
  }

}

//called after the 5th street card is flipped
//calcs overall player earnings and displays highest achieved hand
//adjusts player score
//then cleans up the UI
function endRound(){
  //REMOVE CONSOLE LOG
  //find the user payout
  console.log(currentCards);
  console.log(getSortedRanks(currentCards));
  console.log(findPayout(currentCards));
  //depending on the payout if its 0 then do nothing user not loose money at all
  //negative -1 user looses it all
  //*2 and stuff times each bet user made by that modifier and sum it up and add that to him

  //COMMUNITY CARDS BET - IN THE WORKS


  //CLEAN UP UI
  //UPDATE USER MONEY
  //SHOW A SUMMARY TO USER WHAT THEY WON
}

//DONE

//disables the play buttons to be pressed by user
function disablePlayButtons() {
  document.getElementById("x1").disabled = true;
  document.getElementById("x2").disabled = true;
  document.getElementById("x3").disabled = true;
  document.getElementById("fold").disabled = true;
}
//Enables the play buttons to be pressed by user
function enablePlayButtons() {
  document.getElementById("x1").disabled = false;
  document.getElementById("x2").disabled = false;
  document.getElementById("x3").disabled = false;
  document.getElementById("fold").disabled = false;
}


function flipThirdStreet() {
  card3.classList.toggle("flipCard");
}

function flipFourthStreet() {
  card4.classList.toggle("flipCard");
}

function flipFifthStreet() {
  card5.classList.toggle("flipCard");
}

function flipFirstAndSecond() {
  card.classList.toggle("flipCard");
  card2.classList.toggle("flipCard");
}

function updateUserBalance(){
  document.getElementById("userMoney").innerText = `Your Money: ${playerMoney}$`;
}

function resetUserMoney(){
  playerMoney = 1000;
  updateUserBalance();
}