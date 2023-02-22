console.log("veikia");

const cards = document.querySelectorAll('.card');
console.log(cards);

let clickCardOne;
let clickCardTwo;

function flipCard(card) {
    let clickCard = card.target;

    if (clickCard !== clickCardOne) {
        clickCard.classList.toggle('flip')
        if (!clickCardOne) {
            return clickCardOne = clickCard
        };
        clickCardTwo = clickCard;
        matchCards(card)


    }
}





let cardOneImg
let cardTwoImg

function matchCards(card) {
    console.log(cardOneImg)
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        flipCard(card)

    })
})
