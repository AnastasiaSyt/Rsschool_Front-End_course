import { Review } from './js/Review';
import dataReview from './js/dataReview';
import dataPhotoAnimals from './js/dataPhotoAnimal';
import { Pages } from './js/Pages';
import { Modal } from './js/Modal';
import { ReviewModal } from './js/ReviewModal';

window.onload = function()  {
    console.log("Hello!");
}



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


//----------Range slider------------

//Render reviews

const getWindowType = () => {
    if (window.innerWidth <= 1000 && window.innerWidth > 640) {
        return 'small';
    }
    return 'big';
}

const reviewParent = document.getElementById('test_one');

if (reviewParent) {
    console.log(window.innerWidth);
    const review = new Review(dataReview, reviewParent, getWindowType());
    const reviewSlider = document.getElementById('reviewSlider');
    reviewSlider.setAttribute('max', review.getReviewsCount());
    reviewSlider.addEventListener('change', (event) => {
        const currentValue = event.target.value;
        review.setCurrentActive(currentValue);
    });
    window.addEventListener('resize', () => {
        const type = getWindowType();
        review.changeStepsCount(type);
    })

    addReviewClickHandler();
}

function addReviewClickHandler() {
    document.querySelector('.layout_rows').addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.closest('.gradient_border_rows')) {
            const clickedId = e.target.closest('.gradient_border_rows').getAttribute('data-id');
            //console.log(clickedId);
            const clickedReviewData = getClickedData(clickedId);
            //console.log(clickedReviewData);
            new ReviewModal ('review-modal', clickedReviewData);
        }
    })
}

function getClickedData(id) {
    return dataReview.find( review => review.id == id);
}

                            
//---------------Amount slider ---------

const progressBar = document.getElementById('progress');
if (progressBar) {
    const inputs = progressBar.getElementsByTagName('input');

    const amounts = Array.prototype.reduce.call(inputs, (acc, input) => {
        const value = input.getAttribute('value');
        acc[value] = input;
        return acc;
    }, {});
    
    const amountInput = document.getElementById('amount');
    progressBar.addEventListener('change', (event) => {
        const currentRadio = event.target.value;
        amountInput.setAttribute('value', currentRadio);
    });
    
    amountInput.addEventListener('change', (event) => {
        const value = event.target.value;
        const radioInput = amounts[value];
        if (radioInput) {
            radioInput.setAttribute('checked', true);
        }
    });
    
    amountInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\d]/gm, '');
    });
    
    
    amountInput.setAttribute('value', 100);
    amounts['100'].setAttribute('checked', true);    
}



//-----------------Slider pets-----------------


const sliderPet = document.getElementById('pet_slider');
if (sliderPet) {
    // TODO: add work with Photo slider here
}

