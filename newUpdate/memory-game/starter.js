window.addEventListener("load", function () {

    const cardsArray = [
        {
            name: "fire",
            img: "img/fire.png",
        },
        {
            name: "youtube",
            img: "img/youtube.png",
        },
        {
            name: "flash",
            img: "img/flash.png",
        },
        {
            name: "gift",
            img: "img/gift.png",
        },
        {
            name: "tron",
            img: "img/tron.png",
        },
        {
            name: "ufo",
            img: "img/ufo.png",
        },
        {
            name: "plant",
            img: "img/plant.png",
        },
        {
            name: "burger",
            img: "img/burger.png",
        },
    ];

    const delay = 1000;
    let count = 0;
    let previousCard;
    let firstGuess = "";
    let secondGuess = "";
    let success = 0;
    let gird = document.querySelector(".grid");
    let cardsArrayMerge = null;

    function createGame() {

        cardsArrayMerge = cardsArray.concat(cardsArray).sort(() =>
            (0.5 - Math.random()));

        cardsArrayMerge.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card");
            const front = document.createElement("div");
            front.classList.add("front");
            const back = document.createElement("div");
            back.classList.add("back");
            card.dataset.name = item.name;
            back.style.backgroundImage = `url(${item.img})`;
            card.appendChild(front);
            card.appendChild(back);
            gird.appendChild(card);
        })
    }
    createGame();
    function resetAll() {
        firstGuess = "";
        secondGuess = "";
        previousCard = null;
        count = 0;
        const cards = document.querySelectorAll(".card");
        cards.forEach((item) => item.classList.remove("selected"));
    }

    function matchCard() {
        const matchCards = document.querySelectorAll(".selected");
        [...matchCards].forEach(item => item.classList.add("matched"));
    }
    function congurationGame() {
        gird.innerHTML = null;
        success = 0;
        createGame();
        resetAll();
        console.log("You win");
    }

    gird.addEventListener("click", function (event) {
        const clicked = event.target;
        if (event.nodeName === "SECTION" || previousCard === clicked || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("matched") || !clicked.parentNode.dataset.name) {
            return;
        }
        if (count < 2) {
            count++;
            previousCard = clicked;
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add("selected");
            } else if (count === 2) {
                secondGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add("selected");
            }
            if (firstGuess && secondGuess) {
                if (firstGuess === secondGuess) {
                    setTimeout(matchCard, delay);
                    success += 2;
                    if (success === cardsArrayMerge.length)
                        setTimeout(congurationGame, delay);
                    console.log(success);
                }
                setTimeout(resetAll, delay);
            }
        } else {
            setTimeout(resetAll, delay);
        }
    })
})