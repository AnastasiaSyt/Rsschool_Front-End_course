import birdsData from "./js/birds-data";


let questionNumber = 0; //номер вопроса будет изменяться на следующий, номер страницы, изменяем после правильного ответа


//функция получения рандомного числа, включая концы интервала
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//находим элементы
const headerContainer = document.getElementById('header');
const listContainer = document.getElementById('list');
const submitButton = document.getElementById('submit');

const scoreHTML = document.getElementById('score');

let score = 0; 


//очищаем html разметку
function clearPage() {
    headerContainer.textContent = '';
    listContainer.textContent = '';
}

function showQuestion() {
    clearPage();
    
    const numberBird = getRandomNum(0,5); 
    const audioPath = birdsData[questionNumber][numberBird]['audio'];
    const headerTemplate = `<audio id="%id%" src="%audio%" controls></audio>`;
    
    
    const idBird = birdsData[questionNumber][numberBird]['id'];
    console.log('id птицы:', idBird);

    const audio = headerTemplate.replace('%audio%', audioPath).replace('%id%', idBird);
    console.log(audio, 'id птицы:', numberBird + 1, 'номер в массиве:', numberBird);
    headerContainer.insertAdjacentHTML('afterbegin', audio); 
    
    //варианты ответов по одному
    for (let i = 0; i < birdsData[questionNumber].length; i++) {
        console.log(birdsData[questionNumber][i]['name'])
        const anwsersBirds = birdsData[questionNumber][i]['name'];

        const questionTemplate = `
        <li class="answer__bird">
            <input type="radio" class="answer" name="answer" id="radio-%number%" value="%number%">
            <label for="radio-%number%" id="label-%number%">%answer%</label>
        </li>`;
        console.log(i);
        const answer = questionTemplate.replace('%answer%', anwsersBirds).replace('%number%', i).replace('%number%', i).replace('%number%', i).replace('%number%', i); //как-то это сократить может есть replaceALl
        listContainer.insertAdjacentHTML('beforeend', answer);
    }
}

showQuestion();



const answerClick = listContainer.querySelectorAll('input');

answerClick.forEach((elem) => {
  elem.addEventListener('click', checkAnswer)
});

function checkAnswer() {

    const checkedAnswer = listContainer.querySelector('input:checked');
    const checkedQuestion = headerContainer.querySelector('audio');

    const userAnswer = +checkedAnswer.value; 
    const currentBird = +checkedQuestion.id;

    //сама проверка на правильность 
    if (userAnswer + 1 === currentBird) {
        score = score + 5;
        
        const labelStyle = document.getElementById(`label-${userAnswer}`);
        document.getElementById(`radio-${userAnswer}`).checked = false;
        labelStyle.classList.add("correct");

        console.log(document.getElementById(`radio-${userAnswer}`).checked);
        console.log('score', score);
    } else {
        document.getElementById(`radio-${userAnswer}`).checked = false;

        const labelStyle = document.getElementById(`label-${userAnswer}`);
        labelStyle.classList.add("uncorrect");
        score = score - 1;
    }

    scoreHTML.textContent = `Score: ${score}`;

    //это был последний вопрос или нет
    // if (questionIndex !== questions.length - 1) {
    //     console.log("это не последний вопрос");
    //     questionIndex++;
    //     clearPage();
    //     showQuestion();
    // } else {
    //     console.log('Это еще не все')
    //     clearPage();
    //     showResults();
    // }
}
