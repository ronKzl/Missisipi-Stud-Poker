//some starter vars
let playerMoney = 1000
let handsPlayed = 0
let ante = 25
let sideBet = 0
const SUIT_POS = 1;
const RANK_POS = 0;
//cards array or some sort of DT

let highAceCardOrderMap = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "T":10,"J":11, "Q":12, "K":13, "A":14}

let lowAceCardOrderMap = {"A":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "T":10,"J":11, "Q":12, "K":13}


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
    handnums = [];
    for(i = 0; i < hand.length; i++){
        handnums[i] = hand[i][RANK_POS];
        handnums[i] = highAceCardOrderMap[handnums[i]]
    }
    handnums.sort();
    
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
    handnums.sort();
    
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

//Testing Flush function
let hand = ["5H", "8H", "AH", "2H", "TH"]
let hand2 = ["5H", "8H", "AS", "2H", "TH"]

console.log(check_flush(hand));
console.log(check_flush(hand2));

//Testing Straight function
hand1 = ["5C", "7H", "6H", "8H", "4D"]
hand2 = ["5C", "8H", "AH", "2H", "TD"]
hand3 = ["5C", "4H", "AH", "2H", "3D"]

console.log(check_straight(hand1));
console.log(check_straight(hand2));
console.log(check_straight(hand3));

//Testing Straight Flush function
hand1 = ["5H", "7H", "6H", "8H", "4H"]
hand2 = ["5D", "7H", "6H", "8H", "4D"]
hand3 = ["5H", "JH", "6H", "8H", "4H"]

console.log(check_straight_flush(hand1))
console.log(check_straight_flush(hand2))
console.log(check_straight_flush(hand3))







