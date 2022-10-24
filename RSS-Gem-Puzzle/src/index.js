import { Drawing } from './js/Drawing';
import { Timer } from './js/Timer';

//_____________add layout______________________________

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

//___________Burger Menu________________________
const backgroundBurger = document.createElement('div');
backgroundBurger.classList.add('background_burger');
wrapper.append(backgroundBurger);

const burgerMenu = document.createElement('div');
burgerMenu.classList.add('burger_menu');
backgroundBurger.append(burgerMenu);

const burgerActions = document.createElement('ul');
burgerActions.classList.add('action_burger');
burgerMenu.append(burgerActions);

const saveBurger = document.createElement('li');
saveBurger.classList.add('link_burger');
burgerActions.append(saveBurger);
const textSaveBurger = document.createTextNode('Save')
saveBurger.append(textSaveBurger);

const resumeBurger = document.createElement('li');
resumeBurger.classList.add('link_burger');
burgerActions.append(resumeBurger);
const textResumeBurger = document.createTextNode('Resume')
resumeBurger.append(textResumeBurger);

const scorsBurger = document.createElement('li');
scorsBurger.classList.add('link_burger');
burgerActions.append(scorsBurger);
const textScorsBurger = document.createTextNode('Scors')
scorsBurger.append(textScorsBurger);

const soundBurger = document.createElement('li');
soundBurger.classList.add('link_burger');
burgerActions.append(soundBurger);

const soundSetBurger = document.createElement('div');
soundSetBurger.classList.add('soundSet');
soundBurger.append(soundSetBurger);

const soundLabelBurger = document.createElement('label');
soundLabelBurger.classList.add('switch');
soundSetBurger.append(soundLabelBurger);

const soundInputBurger = document.createElement('input');
soundInputBurger.type = 'checkbox';
soundInputBurger.checked = true;
soundInputBurger.addEventListener('change', (ev) => {
    drawer.setAudioState(soundInputBurger.checked);
});
soundLabelBurger.append(soundInputBurger);

const soundSpanBurger = document.createElement('span');
soundSpanBurger.classList.add('round_toggle');
soundLabelBurger.append(soundSpanBurger);

const soundTextBurger = document.createTextNode('Sound');
soundSetBurger.append(soundTextBurger);

const closeBurger = document.createElement('span');
closeBurger.classList.add('close_burger');
burgerActions.append(closeBurger);


//_____________________End Burger menu___________________

const playField = document.createElement('div');
playField.classList.add('playField');
wrapper.append(playField);

const gameName = document.createElement('div');
gameName.classList.add('gameName');
playField.append(gameName);

const textGameName = document.createTextNode('Game of Fifteen')
gameName.append(textGameName);

//_______________Burger Icon_____________________
const startContainer = document.createElement('div');
startContainer.classList.add('burger_menu_container');
playField.append(startContainer);

const burgerIcon = document.createElement('div');
burgerIcon.classList.add('burger_icon');
startContainer.append(burgerIcon);

const burger = document.createElement('span');
burger.classList.add('burger');
burgerIcon.append(burger);

const burgerLine = document.createElement('span');
burgerLine.classList.add('burger_line');
burger.append(burgerLine);
//____________End Burger Icon_______________________


const start = document.createElement('button');
start.classList.add('start');
startContainer.append(start);

const startText = document.createTextNode('Shuffle and start');
start.appendChild(startText);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
playField.append(buttons);

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

//______________ Burger menu_________________

(function () {

    burgerIcon.addEventListener('click', openMenu);
    backgroundBurger.addEventListener('click', closeMenu);
    closeBurger.addEventListener('click', closeMenu);

    function openMenu() {
        backgroundBurger.classList.add('active');
        burgerMenu.classList.add('active');
    }

    function closeMenu() {
        backgroundBurger.classList.remove('active');
        burgerMenu.classList.remove('active');
    }

}());


start.addEventListener('click', startGame);

function startGame() {
    drawer.startNew();
}

startGame();
