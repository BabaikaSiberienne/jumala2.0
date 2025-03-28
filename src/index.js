
import './pages/index.css'
import {
    openModal,
    onClose,
} from './components/modals';
import { cardsFirstPages, cardsLite, cards20minut, cardsGalopom, cardsWelcome } from './scripts/cards.js'

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
    const arrowButt = tourItem.querySelector('.main__tour-arrow')

    tourItemImage.id = `${data.id}1`
    arrowButt.id = data.id
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

// @todo: Галерея картинок маршрута
const tourButtons = Array.from(document.querySelectorAll('.main__tour-arrow'));
tourButtons.forEach((button) => {
    let i = 0;
    let cards = [];
    let image;

    switch (button.id) {
        case 'cardsLite':
            cards = cardsLite;
            image = document.getElementById('cardsLite1');
            break;
        case 'cards20minut':
            cards = cards20minut;
            image = document.getElementById('cards20minut1');
            break;
        case 'cardsGalopom':
            cards = cardsGalopom;
            image = document.getElementById('cardsGalopom1');
            break;
        case 'cardsWelcome':
            cards = cardsWelcome;
            image = document.getElementById('cardsWelcome1');
            break;
    }

    button.addEventListener('click', () => {
        if (i < 3) {
            image.src = cards[i].link;
            image.alt = cards[i].alt;
            i += 1;
        } else {
            // Сбрасываем индекс и показываем первое изображение снова
            i = 0; // Сбрасываем индекс
            image.src = cards[i].link; // Показываем первое изображение
            image.alt = cards[i].alt; // Устанавливаем alt
            i += 1; // Увеличиваем индекс для следующего клика
        }
    });
});
