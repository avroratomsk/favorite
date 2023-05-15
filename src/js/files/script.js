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
  offset: 50,
  duration: 1000,
  easing: "ease",
});

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      changeColor(dropDownInput.value);
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});


// Скрипты высоты и ширины

let range = document.querySelectorAll('.range-size__input');

if (range) {
  range.forEach(item => {
    item.addEventListener('input', getValue);
  })

  function getValue(e) {
    let parent = e.target.closest('.range-size');
    let value = e.target.value;
    let input = parent.querySelector('.range-value');

    input.value = value;
  }
}




/*

 Получение псевдоэлемента у элемента

*/
// let element = document.querySelector(".form-group");
// let elementStyle = getComputedStyle(element, "::before")
// console.log(elementStyle.color);

function changeColor(value) {
  let dataColorEl = document.querySelectorAll('[data-color]');

  dataColorEl.forEach(color => {
    color.dataset.color = value;
  })
}

let radioChangeColor = document.querySelectorAll('.colors');
radioChangeColor.forEach(el => {
  el.addEventListener('change', function (e) {
    if (this.checked) {
      let dataRadioColor = this.dataset.value;
      changeColor(dataRadioColor)

      if (dataRadioColor == 1) {
        document.querySelector('#colors').classList.add('active-dropdown');
      } else {
        document.querySelector('#colors').classList.remove('active-dropdown');
      }
    }
  })
})

let windowActive = document.querySelectorAll('.stvorki[data-window]');

document.querySelector('.stvorki[data-window]').classList.add('active');


windowActive.forEach(sash => {
  sash.addEventListener('click', function () {

    windowActive.forEach(sash => {
      sash.classList.remove('active');
    })

    this.classList.add('active');

    let quantitySash = this.dataset.window;

    let dataIdEl = document.querySelectorAll('[data-id]');
    dataIdEl.forEach(el => {
      el.dataset.id = quantitySash;
    });

    let openTypeSash = document.querySelector('[data-open]');
    openTypeSash.dataset.open = quantitySash;

    document.querySelectorAll('.variant').forEach(item => {
      item.classList.remove('hide');
    })

    if (openTypeSash.dataset.open == 1) {
      document.querySelectorAll('.variant').forEach(item => {
        item.classList.add('hide');
      })
    }
    if (openTypeSash.dataset.open == 2) {
      document.querySelector('.opening__three').classList.add('hide');
    }
  })
})

let variantSash = document.querySelectorAll('.variant');

variantSash.forEach(item => {
  item.addEventListener('click', function () {
    variantSash.forEach(item => {
      item.classList.remove('active-type');
    })

    this.classList.add('active-type');

    let dataStvorka = this.dataset.stvorka;

    if (dataStvorka == 1) {
      document.querySelector('.s1').classList.add('.active-stvorka')
    }
  })
})



