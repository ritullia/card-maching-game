console.log("veikia");

const cards = document.querySelectorAll('.cards .card');
console.log(cards);

let counter = 0;
let firstClick;
let secondClick;

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('flipped');

        console.log(card);

        if (counter === 0) {
            firstClick = card.getAttribute("emoji")
            counter++;
        } else {
            secondClick = card.getAttribute("emoji")
            counter = 0

            if (firstClick === secondClick) {
                const correctCard = document.querySelectorAll(".card[emoji='" + firstClick + "'] ")

                correctCard[0].classList.add('flip-card')
                correctCard[1].classList.add('flip-card')
            }


        }



        console.log(firstClick)
        console.log(secondClick)
    })
})

