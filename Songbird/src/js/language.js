const langArr = {
    "title": {
        "ru": "Песни птиц",
        "en": "Songbird",
        "by": "Песні птушак",
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
    "main-question": {
        "ru": "Сможешь угадать всех птиц?",
        "en": "Can you guess all the birds?",
        "by": "Зможаш адгадаць усіх птушак?",
    },
    "button": {
        "ru": "Начать викторину",
        "en": "Start quiz",
        "by": "Пачаць віктарыну",
    },
    "score": {
        "ru": "Очки: 0",
        "en": "Score: 0",
        "by": "Балы: 0",
    },
    "button-next": {
        "ru": "Следующая птица",
        "en": "Next bird",
        "by": "Наступная птушка",
    },
    "first-text": {
        "ru": "Послушайте плеер. Выберите птицу из списка",
        "en": "Listen to the player. Select a bird from the list",
        "by": "Паслухайце плэер. Выберыце птушку са спісу",
    },
    // "second-text": {
    //     "ru": "Выберите птицу из списка",
    //     "en": "Select a bird from the list",
    //     "by": "Выберыце птушку са спісу",   
    // },
    // "second-text": {
    //     "ru": "Выберите птицу из списка",
    //     "en": "Select a bird from the list",
    //     "by": "Выберыце птушку са спісу",
    // },
}


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
        location.href = window.location.pathname + "#en";
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').textContent = langArr['title'][hash];
    for (let key in langArr) {
        let words = document.querySelector(`.lng-${key}`);
        if (words) {
            words.textContent = '';
            words.textContent = langArr[key][hash];
        }
    }
}

changeLanguage();
