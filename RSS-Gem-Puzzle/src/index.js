
//_____________add layout______________________________

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const playField = document.createElement("div");
playField.classList.add("playField");
wrapper.append(playField);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
playField.append(buttons);

const start = document.createElement("button");
start.classList.add("start");
buttons.append(start);

const startText = document.createTextNode("Shuffle and start");
start.appendChild(startText);

const counts = document.createElement("div");
counts.classList.add("counts");
playField.appendChild(counts);

const moves = document.createElement("div");
moves.classList.add("moves");
counts.appendChild(moves);

const movesTitle = document.createElement("h3");
moves.appendChild(movesTitle);

const movesText = document.createTextNode("Moves: 0");
movesTitle.appendChild(movesText);

const time = document.createElement("div");
time.classList.add("time");
counts.appendChild(time);

const timeTitle = document.createElement("h3");
time.appendChild(timeTitle);

const timeText = document.createTextNode("Time: 00:00");
timeTitle.appendChild(timeText);



//_____________Create the canvas area__________________

const widthArea = 400;
const heightArea = 400;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = widthArea;
canvas.height = heightArea;
playField.appendChild(canvas);
//document.body.appendChild(canvas);


const frameSize = document.createElement("div");
frameSize.classList.add("frameSize");
playField.appendChild(frameSize);

const ul = document.createElement('ul');
frameSize.appendChild(ul);
 
const dataFrame = ["3x3", "4x4", "5x5", "6x6", "7x7", "8x8"];

for (let i = 0; i < dataFrame.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = dataFrame[i];
  ul.appendChild(li);
}



//_______________Variable___________________________________

const tileCount = 4; //разрядность матрицы потом надо будет изменить на LET
const tileSize = widthArea/tileCount; //размер плиточки

let tilesValue = []; //рандомные значения плиточек
let coordinates = []; //кординаты плиточек 
let finalTiles = []; //выигрышное положение плиточек

let hoveredTile = null; 

//image


// const img = new Image();
// img.src = "./Assets/img/test2.png";



//_______________Events _____________________________________________________

start.addEventListener('click', startGame);

canvas.addEventListener('mousemove', (e) => {
    const clientX = e.offsetX;
    const clientY = e.offsetY;
    // if (currentHover(clientX, clientY)) {
    //     return;
    // } //если мы уже над плиткой?
    hoveredTile = getHoveredTile(clientX, clientY);
})

canvas.addEventListener('mouseout', () => {
    hoveredTile = null;
})


//_______________Click to move tiles_____________________________________________

canvas.addEventListener('click', (e) => {
    const clientX = e.offsetX;
    const clientY = e.offsetY;

    if (currentHover(clientX, clientY)) {
        const tileUp = tilesValue[hoveredTile.i]?.[hoveredTile.j + 1] === 0 && { i: hoveredTile.i, j: hoveredTile.j + 1 };
        const tileDown = tilesValue[hoveredTile.i]?.[hoveredTile.j - 1] === 0 && { i: hoveredTile.i, j: hoveredTile.j - 1 };
        const tileLeft = tilesValue[hoveredTile.i - 1]?.[hoveredTile.j] === 0 && { i: hoveredTile.i - 1, j: hoveredTile.j };
        const tileRight = tilesValue[hoveredTile.i + 1]?.[hoveredTile.j] === 0 && { i: hoveredTile.i + 1, j: hoveredTile.j };

        const emptyTile = (tileUp || tileDown || tileLeft || tileRight);

        if (emptyTile) {
            const currentTile = tilesValue[hoveredTile.i][hoveredTile.j];
            tilesValue[hoveredTile.i][hoveredTile.j] = 0;
            tilesValue[emptyTile.i][emptyTile.j] = currentTile;
            hoveredTile = null;
        }
    }
})



//________________________________________Hover tiles____________________________________

function getHoveredTile(clientX, clientY) {
    return coordinates.find((coord) => {
        return (clientX > coord.x) && (clientX < coord.x + tileSize) && (clientY > coord.y) && (clientY < coord.y + tileSize);
    })
}

function currentHover(clientX, clientY) {
    const currentTileHover = hoveredTile && (clientX > hoveredTile.x) && (clientX < hoveredTile.x + tileSize) && (clientY > hoveredTile.y) && (clientY < hoveredTile.y + tileSize);
    return currentTileHover;
}



//_________________________________ Arrays_______________________________________________________

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



// _______________________Renders________________________

function drawTiles() {
    ctx.clearRect(0, 0, widthArea, heightArea); //чтобы очищалось место сдвинутой ячейки

    for (let i = 0; i < tilesValue.length; i++) {
        for (let j = 0; j < tilesValue.length; j++) {
            const dx = j * tileSize; //получение горизонтальной координаты
            const dy = i * tileSize; //Получение вертикальной координаты
            if (tilesValue[i][j]) {
                ctx.beginPath();

                if (hoveredTile && hoveredTile.x === dx && hoveredTile.y === dy) {
                    ctx.fillStyle = '#0D9095';
                } else {
                    ctx.fillStyle ='white';
                }

                ctx.rect( dx, dy, tileSize, tileSize);
                //ctx.drawImage(img, dx, dy);
                ctx.fill();

                ctx.strokeStyle = '#AAAAAA';
                ctx.lineWidth = 8;
                ctx.stroke();

                ctx.font = 'bold 32px Arial';
                ctx.fillStyle = '#BBBBBB';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';

                const text = tilesValue[i][j];
                const measuredText = ctx.measureText(text);
                const centeredText = tileSize - measuredText.width; //центрирование текста в плиточке

                ctx.fillText(tilesValue[i][j], dx + centeredText/2, dy + tileSize/2);
            }
        }
    }
    requestAnimationFrame(drawTiles);
}



//_____________________START__________________________

function startGame() {
    
    tilesValue = initTilesValue();
    coordinates = getCoordinates();
    finalTiles = getFinalTiles();
    drawTiles();
    console.log(tilesValue, coordinates, finalTiles);
}

startGame();

