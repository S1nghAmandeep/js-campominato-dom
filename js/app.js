// # Gliglia Campo Minato

const playBtnElement = document.getElementById('play-btn');
console.log(playBtnElement);

const difficultyElement = document.getElementById('level');
console.log(difficultyElement)

playBtnElement.addEventListener('click', function () {


    if (difficultyElement.value === "0") {
        gridGenerator(100, "")
    } else if (difficultyElement.value === "1") {
        gridGenerator(81, "cell-nine");
    } else if (difficultyElement.value === "2") {
        gridGenerator(49, "cell-seven")
    }
   
    
    // recuprero celle dal dom
    const cellsDomElements = document.querySelectorAll('.cell');
    // console.log(cellsDomElements);

    // ciclo del array del dom (celle)
    for (let i = 0; i < cellsDomElements.length; i++){
        const selectedCellElement = cellsDomElements[i];

        selectedCellElement.addEventListener('click', function () {
            selectedCellElement.classList.add('bg-aqua');
            console.log(selectedCellElement.innerHTML);
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

const difficoltyOne = getNumberForArray (1, 100, 16);
console.log(difficoltyOne)

function getNumberForArray(randomMin, randomMax, totalNumber) {

    const arrayBombs = [];
    console.log(arrayBombs)

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