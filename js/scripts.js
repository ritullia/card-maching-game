console.log("veikia");

const cards = document.querySelectorAll('.cards .card');
console.log(cards);

//  paspaudimo veiksmas kiekvienai kortelei
cards.forEach((card) => {
    card.addEventListener('click', () => {
        cardFlipped(card)
        matchCards(card)

    })
});


let firstCard;
let secondCard;

function cardFlipped(card) {
    card.classList.add('flipped');


}


//funkcija sutampancioms kortelems
function matchCards(card) {
    let firstCard = card.imageObject.src
    console.log(firstCard)


}

const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

