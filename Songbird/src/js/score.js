const repeatButton = document.querySelector(".result_button");
const data = localStorage.getItem('score');

const results = {
  "message": {
    "ru": `Поздравляем! Вы завершили викторину.`,
    "en": `Congratulations! You have completed the quiz.`,
    "by": `Віншуем! Вы завяршылі віктарыну.`,   
},
"result": {
    "ru": `Ваш результат ${data} очков`,
    "en": `Your score: ${data} points`,
    "by": `Ваш вынік: ${data} балаў`,
},
"result-button": {
    "ru": "Попробовать снова",
    "en": "Try again",
    "by": "Паспрабаваць зноў",
},
"link-main": {
  "ru": "Главная",
  "en": "Main",
  "by": "Галоўная",
},
"link-quiz": {
  "ru": "Викторина",
  "en": "Quiz",
  "by": "Віктарына",
},
"link-birds": {
  "ru": "Птицы",
  "en": "Birds",
  "by": "Птушкі",
},
};

function getScore() {
  const result = document.querySelector('.result');
  const message = document.querySelector('.message');
console.log(data);
  if (+data === 30) {
    message.textContent = '';
    message.textContent = `Игра окончена! Поздравляем!
                           Вы набрали максимальное количество очков`;
    result.textContent ='';
  } else {
    result.textContent = '';
    result.textContent = `Ваш результат ${data} очков`;
  }
}

getScore()

function clearStorage() {
    localStorage.removeItem('score');
    localStorage.clear();
}

repeatButton.addEventListener('click', clearStorage);

const select = document.querySelector(".change-languages");
const allLang = ['en', 'ru', 'by'];

select.addEventListener('change', changeURL);

function changeURL() {
    let language = select.value;
    location.href = window.location.pathname + "#" + language;
    location.reload();
}

function changeLanguage() {
    let hash = (window.location.hash).substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ru";
        location.reload();
    }
    select.value = hash;
    for (let key in results) {
        let words = document.querySelector(`.lng-${key}`);
        if (words) {
            words.textContent = '';
            words.textContent = results[key][hash];
        }
    }
}

changeLanguage();
