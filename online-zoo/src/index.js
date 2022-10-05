import { Review } from './js/Review'

const data = [
    {
        id: 1,
        nameUser: 'Michael John',
        local: 'Austria',
        content: 'We decided to visit this famous Zoo (one of the oldest in the world) over the Easter weekend on Good Friday. We decided to purchase the combo tickets which allows access both to the Zoo itself an stage Tropical Aquarium. Tickets were not cheap €40 each for one adult. We began our visit by going into the Tropical Aquarium first and I have to say this was the best part of the overall experience. I\'ve never seen seen such hugh aquariums before it was amazing. The Zoo or tierpark itself was OK but I found that some of the enclosures were rather small for some of the bigger animals ,e.g. Elephants. So a bit disappointed with that in have to say. I guess you have to remember that the City of Hamburg has encroached upon the park over many years which limits development, hence a 4 and not a 5. If I were to visit again I would certainty go to the Tropical Aquarium that was impressive, but the Zoo no.',
        avatar: '../assets/images/avatars/Ellipse 1.jpg',
    },
    {
        id: 2,
        nameUser: 'Irene Rubenyan',
        local: 'Greece',
        content: 'It was a great experience going to the zoo park Hagenbeck!! We had a little time when we went so we chose to get in the aquarium!! It was so clean, interesting and it had a big sort of animals!! It was like you were in a discovering were its every animal and it was more exciting like that!! You were close to some of them!! ',
        avatar: '../assets/images/avatars/Ellipse 2.png',
    },
    {
        id: 3,
        nameUser: 'Phillip D',
        local: 'Belarus',
        content: 'Came to the zoo as we alway try and visit one when on holiday. Lots of animals to see, particularly like the penguins, seals and walrus\’ It was a cold day so lots of the animals where trying to keep warm, but still plenty to see.Also visited the aquarium,it was nice but we have been to better, but plenty to look at.',
        avatar: '../assets/images/avatars/Ellipse 3.png',
    },
    {
        id: 4,
        nameUser: 'Adrian L',
        local: 'China',
        content: 'My godson and his little brother really love zoos and their parents and I brought them to this famous zoo in Germany. The parents told me that they had the best array of animals, and they were allowed to feed certain animals such as monkeys, elephants and lamas. They have stalls providing food after passing the entrance and the min-car/trolley area. There are no fees but you are encouraged to make a donations, which most people do. Even one or two euros are appreciated by the staff. The kids have a fun times feeding the elephants and other animals.',
        avatar: '../assets/images/avatars/Ellipse 4.png',
    },
    
]




//--------------- Burger menu ---------------

(function () {
    const hamburger = document.querySelector('.header__logo-lines');
    const menu = document.querySelector('.burger_menu');
    const menuCloseItem = document.querySelector('.close_ham');
    const menuBg = document.querySelector('.darken_bg_ham');


    hamburger.addEventListener('click', openMenu);
    menuBg.addEventListener('click', closeMenu);
    menuCloseItem.addEventListener('click', closeMenu);


    function openMenu() {
    menuBg.classList.add('active');
    menu.classList.add('active');
     }

        
    function closeMenu() {
    menuBg.classList.remove('active');
    menu.classList.remove('active');
     }

}());


//------------- Render revies ----------------



if(data) {
    renderReviewsToDOM ()
}

//--------------- Slider pets ---------------


(function() {
    // по умолчаниию активный слайд делаем центральный, т.е. второй.
    let activeSlide = 1;
    // получаем общее количество слайдов
    const countOfSlides = document.getElementsByClassName('slide').length;
    // Тут берем у контейнера с классом slider детей, чтобы в дальнейшем повеситиь событие click на них
    const slides = document.getElementsByClassName('slider')[0].children;
    // Здесь ищем все radioButtons. Они нам нужны будут для того, чтобы после смены слайда мы могли сделать check нужному элементу
    const radioButtons = document.getElementsByClassName('slider__navigation')[0].children;
    // Так как  в случае, если у нас мобильная версия обычный слайд имеет display = 'none', то можем с помощью этого определить
    // Мобильное ли это устройство. Это не самый лучший подход, правильнее было бы опеределять ширину экрана например
    const isMobile = document.getElementsByClassName('slide')[0].style.display === 'none';
    const slideMob = document.getElementsByClassName('slide-mobile');

    // Тут по-хорошему нужно проверять, а есть ли у тебя вообще такие элементы.
    // И вообще элементы в доме лучше искать по id, если тебе необходимо навесить какое-либо событие.
    // И как дополнительное пожелание/совет - для строковых итералов, вроде названия классов или id
    // элементов лучше использовать константы
    const leftArrow = document.getElementsByClassName('left_arrow')[0];
    const rightArrow = document.getElementsByClassName('right_arrow')[0];

    // Тут мы вешаем события на клики по стрелкам, в которых вычисляем новый активный слайд,
    // затем вызваем функции смены классов
    leftArrow.addEventListener('click', () => {
        // Вычесляем активный слайд
        activeSlide = activeSlide === 0 ? countOfSlides - 1 : activeSlide - 1;
        // Меняем слайд
        changeSlides(activeSlide, countOfSlides, slides, isMobile);
        // Делаем check нужному radioButton
        selectRadioButton(activeSlide, radioButtons);
    });
    rightArrow.addEventListener('click', () => {
        // Вычесляем активный слайд
        activeSlide = activeSlide === countOfSlides - 1 ? 0 : activeSlide + 1;
        // Меняем слайд
        changeSlides(activeSlide, countOfSlides, slides, isMobile);
        // Делаем check нужному radioButton
        selectRadioButton(activeSlide, radioButtons);
    });
    // А тут вешаем события клика на каждый слайд
    Array.prototype.forEach.call(slides, (slide, index) => {
        slide.addEventListener('click', () => {
            // Вычесляем активный слайд
            activeSlide = index;
            // Меняем слайд
            changeSlides(activeSlide, countOfSlides, slides, isMobile);
            // Делаем check нужному radioButton
            selectRadioButton(activeSlide, radioButtons);
        });
    })
}());

/**
 * Change slide
 * @param {number} activeSlide 
 * @param {number} countOfSlides 
 * @param {HTMLCollection} slides 
 * @param {boolean} isMobile 
 */ 

function changeSlides(activeSlide, countOfSlides, slides, isMobile) {
    // Опеределяем индекс слайда, который должен находиться слева
    const left = activeSlide === 0 ? countOfSlides - 1 : activeSlide - 1;
    // Опеределяем индекс слайда, который должен находиться справа
    const right = activeSlide === (countOfSlides - 1) ? 0 : activeSlide + 1;
    if (isMobile) {
        // Если у нас мобильная верстка - меняем display
        slideMob[left].style.display = 'none';
        slideMob[activeSlide].style.display = 'block';
        slideMob[right].style.display = 'none';
    } else {
        // Если у нас декстопная верстка - меняем order
        slides[left].style.order = 1;
        slides[activeSlide].style.order = 2;
        slides[right].style.order = 3;
    }
}

/**
 * 
 * @param {number} activeSlide 
 * @param {HTMLCollection} radioButtons 
 */

function selectRadioButton(activeSlide, radioButtons) {
    radioButtons[activeSlide].checked = true;
} 


//______________________________________________________

const renderReviewsToDOM = () => {
    
}