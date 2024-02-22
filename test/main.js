const stage = document.getElementById("stage");
const squareTemplate = document.getElementById("square-template");

const BUTTON_CLICK_EVENT = document.getElementById('btn');

let sum = 0;

const stoneStateList = [];

const createSquares = () => {
    for (let i = 0; i < 10; i++) {
        const square = squareTemplate.cloneNode(true);
        square.removeAttribute("id");
        stage.appendChild(square);

        const stone = square.querySelector('.stone'); b

        let defaultState;
        if (i == 0) {
            defaultState = 1;
        } else {
            defaultState = 0;
        }

        stone.setAttribute("data-state", defaultState);

        stone.setAttribute("data-index", i);
        stoneStateList.push(defaultState);
    }
};

window.onload = () => {
    createSquares();
};


BUTTON_CLICK_EVENT.addEventListener('click', () => {
    var random = Math.floor(Math.random() * 7) + 1;
    stoneStateList[sum] = 0;

    sum += random;
    if (sum == 9) {
        ;
        stoneStateList[sum] = 1;
        alert("Done!");
    } else {
        stoneStateList[sum] = 1;
    }
});
