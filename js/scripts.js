console.log("veikia");

const cards = document.querySelectorAll('.card');
console.log(cards);

function flipCard(e) {
    let clickCard = e.target;
    clickCard.classList.add('flip')
    console.log(clickCard)

}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})
