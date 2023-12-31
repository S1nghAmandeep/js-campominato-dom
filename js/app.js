// # Gliglia Campo Minato

const playBtnElement = document.getElementById('play-btn');
console.log(playBtnElement);

const difficultyElement = document.getElementById('level');
console.log(difficultyElement)

const gameOverElement = document.querySelector('.game-over');

const scoreDomElement = document.getElementById('score');

let score
let cellsNumber
let bombsNumber = 16;
// le griglie in base all difficoltà

playBtnElement.addEventListener('click', function () {
    gameOverElement.classList.remove('active');

    scoreDomElement.innerHTML= '0'

    score = 0

    let bombs = [];

    if (difficultyElement.value === "0") {
        cellsNumber = 100;
        gridGenerator(100, "")
        bombs = getNumberForArray(1, 100, 16)
    } else if (difficultyElement.value === "1") {
        cellsNumber = 81;
        gridGenerator(81, "cell-nine");
        bombs = getNumberForArray(1, 81, 16)
    } else if (difficultyElement.value === "2") {
        cellsNumber = 49;
        gridGenerator(49, "cell-seven")
        bombs = getNumberForArray(1, 49, 16)
    }

    console.log(bombs)

    
    // recuprero celle dal dom
    const cellsDomElements = document.querySelectorAll('.cell');
    // console.log(cellsDomElements);

    // ciclo di array del dom (celle)
    for (let i = 0; i < cellsDomElements.length; i++){
        const selectedCellElement = cellsDomElements[i];
        
        selectedCellElement.addEventListener('click', function () {
           
            let maxScore = cellsNumber - bombsNumber;
            console.log(maxScore)

            const cellNumbers = parseInt(selectedCellElement.innerHTML);
            
            if (bombs.includes(cellNumbers)){
                selectedCellElement.classList.add('bg-red');
                gameOverElement.classList.add('active');
                console.log(gameOverElement);   
            } else {
                selectedCellElement.classList.add('bg-aqua');
                console.log(selectedCellElement.innerHTML);
                score ++
                console.log(score)
                scoreDomElement.innerHTML = score;

                if (score === maxScore) {
                    alert('you win');
                    console.log(score);
                }
            }
        })
    }
})


// funzione per generare le gliglie
function gridGenerator(numCell, classCell) {

    const bodyCellElement = document.querySelector('.cell-body');
    console.log(bodyCellElement);
    bodyCellElement.innerHTML = '';

    for (let i = 0; i < numCell; i++){
        const n = i + 1;
        
        // creato stinga per inserirela nel DOM
        const cellsString = `<div class="cell ${classCell}">${n}</div>`;
        bodyCellElement.innerHTML += cellsString;
    }
}

// funzione per generare array dei numeri random

function getNumberForArray(randomMin, randomMax, totalNumber) {

    const arrayBombs = [];
    // console.log(arrayBombs)

    while (arrayBombs.length < totalNumber) {
        const number = getRandomInt(randomMin, randomMax);
        // console.log(number)
        if (!arrayBombs.includes(number)) {
            arrayBombs.push(number);
        }
    }
    return arrayBombs
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}