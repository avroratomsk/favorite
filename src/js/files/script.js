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



let mapId = document.getElementById('map');
function init() {
  let map = new ymaps.Map('map', {
    center: [53.39024201488915, 58.99189761726708],
    zoom: 16
  });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  let placemark1 = new ymaps.Placemark([53.39062494162031, 58.98963383201585], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/icons/placemark.png',
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  })
  map.geoObjects.add(placemark1);
}
if (mapId) {
  ymaps.ready(init);
}
AOS.init({
  once: false,
  offset: 0,
  duration: 800,
  easing: "ease",
});