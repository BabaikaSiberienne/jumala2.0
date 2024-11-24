
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

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
