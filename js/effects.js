//TEMP file to get all the javascript function down and test them to make sure they will work

let amountRevealed = 0;

//disable Play buttons
disablePlayButtons();

//Get the 5 cards on load
const card = document.getElementById("card");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");

//Snippet to set a picture so I don't forget
document.getElementById("thirdStImg").src =
  "..\\Playing Cards\\PNG-cards-1.3\\2_of_diamonds.png";

//Current workaround for the first 2 cards not displaying properly without having text below them...
document.getElementById("b").style.color = "#5f8a6a";
document.getElementById("a").style.color = "#5f8a6a";

//TEMP LISTENERS to test flip
card5.addEventListener("click", flipFifthStreet);
card4.addEventListener("click", flipFourthStreet);
card3.addEventListener("click", flipThirdStreet);

//set up event listeners for the buttons
document.getElementById("deal").addEventListener("click", dealBtn);
document.getElementById("fold").addEventListener("click", fold);



//NEED MORE WORK

//Sets up the game
function dealBtn() {
  //Draw 5 random cards from the Json

  //Call a function to set the appropriate pictures on the appropirate card backs

  //Lock In the Ante & 3 card bet of user

  //Flip the first 2 cards
  flipFirstAndSecond();
  //Disable the dealButton
  document.getElementById("deal").disabled = true;
  //Enebale the other 4 buttons
  enablePlayButtons();
  amountRevealed = 2;
}


//Fold -> flip back only the up-right flipped cards
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

  //enable Ante and third card bet back up again
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