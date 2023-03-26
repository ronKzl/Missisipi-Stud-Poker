//some starter vars
let playerMoney = 1000
let handsPlayed = 0
let ante = 25
let sideBet = 0
const SUIT_POS = 1;
const RANK_POS = 0;
//cards array or some sort of DT

let cardOrderMap = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "T":10,"J":11, "Q":12, "K":13, "A":14}


function check_flush(hand) {
    startCard = hand[RANK_POS][SUIT_POS];
    for(let i = 1; i < hand.length; i++){
        if(startCard != hand[i][SUIT_POS]){
            return false;
        }
    }
    return true;
}



//Testing Flush function
let hand = ["5H", "8H", "AH", "2H", "TH"]
let hand2 = ["5H", "8H", "AQ", "2H", "TH"]
let hand3 = ["5J", "8H", "AH", "2H", "TD"]
console.log(check_flush(hand));
console.log(check_flush(hand2));
console.log(check_flush(hand3));