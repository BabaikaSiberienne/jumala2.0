
import './pages/index.css'
import { cards20minut, cardsFirstPages, cardWelcome, cardsGalopom} from "./scripts/cards.js"
import './pages/index.css'
import { 
    openModal,
    onClose,
  } from './components/modals';

//переменные
//кнопка показа сертификатов
const certificatesButton = document.querySelector('.main__certificates-button');   
//модалка с сертификатами
const certificateModal = document.querySelector('.modal');
//кнопка закрытия
const closeButton = document.querySelector('.modal__close');

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

// @todo: DOM узлы



//console.log(cardsFirstPages)

//const buttonCertificates = document.querySelector('.main__certificates-button')
//function accordeonButtonCertificates () {
    
//}
//const cardTemplate = document.querySelector('#main__tour-template');              //шаблон картинки программы
//const cardContainer = document.querySelector('.main__tours-list');                //место для включения картинок
//let tourCard = cardTemplate.content.querySelector('.main__one-tour');             //карточка тура в разметке

//function createCard(data) {
//    const tourCardItem = tourCard.cloneNode(true);                                  //клонировать шаблон 
//    const tourImage = tourCardItem.querySelector('.main__tour-image');              //картинка карточки тура
//    const tourName = tourCardItem.querySelector('.main__tour-name');                //название тура
//    tourImage.src = data.link;
//    console.log(data.link)
//    tourImage.alt = data.alt;
//    tourName.textContent = data.title;
//    return tourCardItem
//}

//cardsFirstPages.forEach(item => {
//    const tourCard = createCard(item);
//    cardContainer.append(tourCard)
//});