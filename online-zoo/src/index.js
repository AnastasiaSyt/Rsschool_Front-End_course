import {Review} from './js/Review';
import dataReview from './js/dataReview';




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

//----------Писали с Лешей------------

// const reviewParent = document.getElementById('test_one');

// if (reviewParent) {
//   new Review(dataReview, reviewParent);
// }

//----------Виктория Ворожун------------

//Render reviews

if(dataReview) {
  renderReviewsToDom();
}


function renderReviewsToDom() {
  const reviewsWrapper = getReviewsWrapper();
  generateReviews(dataReview).forEach( review => {
    reviewsWrapper.append(review.generateReview())
  });
}

function getReviewsWrapper() {
  const reviewsContainer = document.querySelector('.testimonials_wrapper');
  reviewsContainer.innerHTML = '';
  return reviewsContainer;
}


/**
//      * 
//      * @param {object[]} dataReview
//      * 
//      */
function generateReviews(dataReview) {
  let reviews = [];
  dataReview.forEach(review => {
    reviews.push(new Review(review))
  });
  return reviews;
}

