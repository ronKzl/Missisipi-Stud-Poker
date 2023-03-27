//TEMP file to get all the javascript function down and test them to make sure they will work

const card = document.getElementById("card5");
const card2 = document.getElementById("card4");
const card3 = document.getElementById("card3");

document.getElementById("thirdStImg").src =
  "..\\Playing Cards\\PNG-cards-1.3\\2_of_diamonds.png";

  document.getElementById("b").style.color = "#5f8a6a";
  document.getElementById("a").style.color = "#5f8a6a";


card.addEventListener("click", flipFifthStreet);
card2.addEventListener("click", flipFourthStreet);
card3.addEventListener("click", flipThirdStreet);

function flipThirdStreet() {
  card3.classList.toggle("flipCard");
  
}

function flipFourthStreet() {
  card2.classList.toggle("flipCard");
}

function flipFifthStreet() {
  card.classList.toggle("flipCard");
}
