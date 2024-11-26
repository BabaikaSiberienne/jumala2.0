
// Функция открытия модального окна
export function openModal (modal) {
  modal.classList.add('modal__visible');
  document.addEventListener('keydown', closeOnEscape);
  
} 

// Функция закрытия окна  
export function onClose(modal) {
  modal.classList.remove('modal__visible');
  document.removeEventListener('keydown', closeOnEscape);
}

// Функция закрытия по эскейпу
export function closeOnEscape (e) {
  if(e.key === 'Escape') {
    const item = document.querySelector('.modal__visible');
    onClose(item);
  }
}







