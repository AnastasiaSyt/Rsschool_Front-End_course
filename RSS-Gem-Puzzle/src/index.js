import { Drawing } from './js/Drawing';
import { Timer } from './js/Timer';

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

const save = document.createElement('button');
save.classList.add('save_button');
buttons.append(save);

save.addEventListener('click', () => {
    drawer.saveGame();
});

const saveText = document.createTextNode('Save');
save.appendChild(saveText);

const resume = document.createElement('button');
resume.classList.add('resume_button');
buttons.append(resume);
resume.addEventListener('click', () => {
    drawer.resumeGame();
});

const resumeText = document.createTextNode('Resume');
resume.appendChild(resumeText);

const scors = document.createElement('button');
scors.classList.add('scors_button');
buttons.append(scors);
const scorsText = document.createTextNode('Scors');
scors.appendChild(scorsText);

const soundSet = document.createElement('div');
soundSet.classList.add('soundSet');
buttons.append(soundSet);

const sound = document.createElement('label');
sound.classList.add('switch');
soundSet.append(sound);

const soundInput = document.createElement('input');
soundInput.type = 'checkbox';
soundInput.checked = true;
soundInput.addEventListener('change', (ev) => {
    drawer.setAudioState(soundInput.checked);
});
sound.append(soundInput);

const soundSpan = document.createElement('span');
soundSpan.classList.add('round_toggle');
sound.append(soundSpan);

const soundText = document.createTextNode('Sound');
soundSet.append(soundText);

const counts = document.createElement('div');
counts.classList.add('counts');
playField.appendChild(counts);

const moves = document.createElement('div');
moves.classList.add('moves');
counts.appendChild(moves);

const movesCount = document.createElement('h3');
movesCount.textContent = 'Moves: 0';
moves.appendChild(movesCount);

const time = document.createElement('div');
time.classList.add('time');
counts.appendChild(time);

const timeTitle = document.createElement('h3');
time.appendChild(timeTitle);

const timeText = document.createTextNode('Time: 00:00');
timeTitle.appendChild(timeText);

const drawer = new Drawing(playField, movesCount, timeTitle);

const frameSize = document.createElement('div');
frameSize.classList.add('frameSize');
playField.appendChild(frameSize);

const ul = document.createElement('ul');
frameSize.appendChild(ul);

const frameSizes = document.createTextNode('Other sizes:');
ul.appendChild(frameSizes);
ul.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI' && target.getAttribute('count')) {
        drawer.startNew(Number.parseInt(target.getAttribute('count')));
    }
});

window.addEventListener('resize', () => {
    drawer.updateSize();
});
const dataFrame = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];

for (let i = 0; i < dataFrame.length; i++) {
    const li = document.createElement('li');
    li.textContent = dataFrame[i];
    li.setAttribute('count', i + 3);
    ul.appendChild(li);
}

//_______________Events ___________________________

start.addEventListener('click', startGame);

function startGame() {
    drawer.startNew();
}

startGame();
