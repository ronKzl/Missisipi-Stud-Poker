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
    console.log(handnums);
    for(i = 0; i < 4; i++){
        if(handnums[i] == handnums[i+1]){
            handnums.splice(i, 2);
            console.log(handnums);
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

hand1 = ["TH", "QH", "AH", "JD", "KH"]
console.log(hand1)
console.log(getSortedRanks(hand1))
console.log(check_straight_flush(hand1))




