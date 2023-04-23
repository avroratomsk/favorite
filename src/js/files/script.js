// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let readReviewsBtn = document.querySelectorAll('.reviews__slide--button');

if (readReviewsBtn.length > 0) {
  readReviewsBtn.forEach(btn => {
    btn.addEventListener('click', openReviews);
  });
}

function openReviews(e) {
  e.target.classList.toggle('active-read-btn');
  let parent = e.target.parentElement;
  let textReviews = parent.querySelector('.reviews__slide--text');
  textReviews.classList.toggle('reviews_active');
}