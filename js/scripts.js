console.log("veikia");

const cards = document.querySelectorAll(".cards .card");
console.log(cards);

//  paspaudimo veiksmas kiekvienai kortelei
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cardFlipped(card);
    matchCards(card);
  });
});

let firstCard;
let secondCard;

function cardFlipped(card) {
  card.classList.add("flipped");
}

//funkcija sutampancioms kortelems
function matchCards(card) {
  if (firstCard) {
    secondCard = card;
    if (firstCard.getAttribute("emoji") === secondCard.getAttribute("emoji")) {
      console.log("Paveiksliukai sutampa");
    } else {
      setTimeout(() => {
        secondCard.classList.remove("flipped");
        firstCard.classList.remove("flipped");
      }, 2000);
    }
    setTimeout(() => {
      firstCard = null;
    }, 2000);
  } else {
    firstCard = card;
  }

  console.log(firstCard);
}

const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
