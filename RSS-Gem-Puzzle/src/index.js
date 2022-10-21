import { Drawing } from './js/Drawing';

//_____________add layout______________________________

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const playField = document.createElement('div');
playField.classList.add('playField');
wrapper.append(playField);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
playField.append(buttons);

const start = document.createElement('button');
start.classList.add('start');
buttons.append(start);

const startText = document.createTextNode('Shuffle and start');
start.appendChild(startText);

const counts = document.createElement('div');
counts.classList.add('counts');
playField.appendChild(counts);

const moves = document.createElement('div');
moves.classList.add('moves');
counts.appendChild(moves);

moves.innerHTML = `<h3>Moves: 0<h3>`;

// const movesTitle = document.createElement('h3');
// moves.appendChild(movesTitle);

// const movesText = document.createTextNode('Moves: 0');
// movesTitle.appendChild(movesText);

const time = document.createElement('div');
time.classList.add('time');
counts.appendChild(time);

const timeTitle = document.createElement('h3');
time.appendChild(timeTitle);

const timeText = document.createTextNode('Time: 00:00');
timeTitle.appendChild(timeText);

const drawer = new Drawing(playField, moves);

const frameSize = document.createElement('div');
frameSize.classList.add('frameSize');
playField.appendChild(frameSize);

const ul = document.createElement('ul');
frameSize.appendChild(ul);

const frameSizes = document.createTextNode('Other sizes:');
ul.appendChild(frameSizes);

const dataFrame = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];

for (let i = 0; i < dataFrame.length; i++) {
    const li = document.createElement('li');
    li.textContent = dataFrame[i];
    ul.appendChild(li);
}

//_______________Events ___________________________

start.addEventListener('click', startGame);

function startGame() {
    console.log('init');
    drawer.initTilesValue();
    drawer.getCoordinates();
    drawer.getFinalTiles();
    drawer.drawTiles();
}

startGame();
