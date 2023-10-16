// # Gliglia Campo Minato

const playBtnElement = document.getElementById('play-btn');
console.log(playBtnElement);

const difficultyElement = document.getElementById('level');
console.log(difficultyElement)

const gameOverElement = document.querySelector('.game-over');


playBtnElement.addEventListener('click', function () {
    gameOverElement.classList.remove('active')

    let bombs = [];

    if (difficultyElement.value === "0") {
        gridGenerator(100, "")
        bombs = getNumberForArray(1, 100, 16)
    } else if (difficultyElement.value === "1") {
        gridGenerator(81, "cell-nine");
        bombs = getNumberForArray(1, 81, 16)
    } else if (difficultyElement.value === "2") {
        gridGenerator(49, "cell-seven")
        bombs = getNumberForArray(1, 49, 16)
    }

    console.log(bombs)

    
    // recuprero celle dal dom
    const cellsDomElements = document.querySelectorAll('.cell');
    // console.log(cellsDomElements);

    // ciclo del array del dom (celle)
    for (let i = 0; i < cellsDomElements.length; i++){
        const selectedCellElement = cellsDomElements[i];
        
        selectedCellElement.addEventListener('click', function () {
           
            const cellNumber = parseInt(selectedCellElement.innerHTML);
            
            console.log(score)
            if (bombs.includes(cellNumber)){
                selectedCellElement.classList.add('bg-red')
                gameOverElement.classList.add('active')
                console.log(gameOverElement)   
            } else {
                selectedCellElement.classList.add('bg-aqua');
                console.log(selectedCellElement.innerHTML);
            }

        })
    }
})

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