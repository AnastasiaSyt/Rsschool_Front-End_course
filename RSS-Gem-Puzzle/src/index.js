
// Create the canvas

const widthArea = 400;
const heightArea = 400;

const canvas = document.createElement("canvas");
const  ctx = canvas.getContext("2d");
canvas.width = widthArea;
canvas.height = heightArea;
document.body.appendChild(canvas);


// Variable

const tileCount = 4; //разрядность матрицы потом надо будет изменить на LET
const tileSize = widthArea/tileCount; //размер плиточки

let tilesValue = []; //рандомные значения плиточек
let coordinates = []; //кординаты плиточек 
let finalTiles = []; //выигрышное положение плиточек



/**
 * Функция генерирует исходный массив, для игры
 * 
 */
function initTilesValue() {
    let tilesValue = [];
    let result = []; 
    // проходим по строкам i 
    for (let i = 0; i < tileCount; i++) {
        const rowTiles = [];
        //по столбцам
        for (let j = 0; j < tileCount; j++) {
            while (rowTiles.length !== tileCount) {
                const randomValue = Math.floor(Math.random() * (tileCount **2));
                if(!tilesValue.includes(randomValue)) {
                    rowTiles.push(randomValue); //добавляем рандомные значения в строки
                    tilesValue.push(randomValue); //добавляем уникальные значения к уже существующим
                }
            }
        }
        result.push(rowTiles);
    }
    return result;
}

/**
 * Функция возвращает массив, который нужно получить в итоге
 * та раскладка, которая означает выигрыш
 */
 function getFinalTiles(){
    let result = [];
    let counter = 1; // counter 1 для того чтобы финальная матрица начиналась с 1 в верхнем левом углу, а пустая ячейка была в нижнем правом
    for (let i = 0; i < tileCount; i++) {
        const finalStateRow = [];
        for (let j = 0; j < tileCount; j++) {
            finalStateRow.push(counter);
            counter++;
        }
        result.push(finalStateRow);
    }
    result[result.length - 1][tileCount - 1] = 0; //для того чтобы финальная матрица начиналась с 1 в верхнем левом углу, а пустая ячейка была в нижнем правом
    return result;
}

/**
 * Функция возвращает координаты верхнего левого угла каждой будущей ячейки
 */

function getCoordinates() {
    const result = [];
    for (let i = 0; i < tileCount; i++) {
        for (let j =0; j < tileCount; j++) {
            result.push({i, j, x: j * tileSize, y: i * tileSize});
        }
    }
    return result;
}



function startGame() {
    
    tilesValue = initTilesValue();
    coordinates = getCoordinates();
    finalTiles = getFinalTiles();
    
    console.log(tilesValue, coordinates, finalTiles);
}

startGame();

