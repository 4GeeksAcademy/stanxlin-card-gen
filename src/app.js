window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  //get a random # from 1 - 4 for the array index
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[randomSuitIndex];

  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  const randomNumber = numbers[randomNumberIndex];

  const selectedNumberDiv = document.getElementById("number");
  const selectedIcon1Div = document.getElementById("icon1");
  const selectedIcon2Div = document.getElementById("icon2");

  selectedNumberDiv.innerHTML = randomNumber;
  if ((selectedIcon1Div.innerHTML = randomSuit) === "♥") {
    selectedIcon1Div.style.color = "red";
  }
  if ((selectedIcon2Div.innerHTML = randomSuit) === "♥") {
    selectedIcon2Div.style.color = "red";
  }
};
