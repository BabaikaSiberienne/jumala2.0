
import './pages/index.css'
import {
    openModal,
    onClose,
} from './components/modals';
import { cardsFirstPages } from './scripts/cards.js'

//переменные
//кнопка показа сертификатов
const certificatesButton = document.querySelector('.main__certificates-button');
//модалка с сертификатами
const certificateModal = document.querySelector('.modal');
//кнопка закрытия
const closeButton = document.querySelector('.modal__close');

//темплейт
const tourTemplate = document.querySelector('#main__tour-template').content;

//дом-узел, где картинки туров
const tourContainer = document.querySelector('.main__tours-list');

//одна картинка из шаблона
let tourCard = tourTemplate.querySelector('.main__one-tour');

// const rareCard = ]

//функции
//открытие модалки с сертификатами
function openCertModal() {
    openModal(certificateModal);
}

function closeCertModal() {
    onClose(certificateModal)
}

//слушатели на кнопки
//кнопка открытия сертификата
certificatesButton.addEventListener('click', openCertModal);

//кнопка закрытия модалки
closeButton.addEventListener('click', closeCertModal);

//выведение карточек туров на страницу
function showTour(data) {
    const tourItem = tourCard.cloneNode(true)
    const tourItemImage = tourItem.querySelector('.main__tour-image');
    const tourItemTitle = tourItem.querySelector('.main__tour-name');
    const rareCard = tourItem.querySelector('.rareside');

    tourItemTitle.textContent = data.title
    tourItemImage.src = data.link;
    tourItemImage.alt = data.alt;
    
    tourItemImage.addEventListener('click', function () {
        turnTour(rareCard)
    })

    rareCard.addEventListener('click', function() {
        turnBackTour(rareCard)
    })

    tourCard = tourItem
    return tourCard 
}

//кнопка поворота страницы туда
function turnTour (item) {
    item.classList.remove('hidden')
    item.classList.add('visible');
}

//кнопка поворота страницы обратно
function turnBackTour(item) {
    item.classList.remove('visible')
    item.classList.add('hidden')
}

cardsFirstPages.forEach(function(item) {
    showTour(item);
    tourContainer.prepend(tourCard);
})

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
