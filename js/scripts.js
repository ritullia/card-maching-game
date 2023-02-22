console.log("veikia");

const cards = document.querySelectorAll('.card');
console.log(cards);

let clickCardOne;
let clickCardTwo;

function flipCard(e) {
    let clickCard = e.target;
    clickCard.classList.toggle('flip')
    console.log(clickCard);

    if (!clickCardOne) {
        return clickCardOne - clickCard
    };
    clickCardTwo = clickCard;



}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})
