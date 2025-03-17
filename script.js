window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Получаем элементы
const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close-btn");
const modalDescription = document.getElementById("modalDescription");

// Получаем все кнопки с классом "openModalBtn"
const openModalBtns = document.querySelectorAll(".openModalBtn");

// Открываем модальное окно при клике на любую кнопку
openModalBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Здесь можно динамически обновить описание в модальном окне в зависимости от карточки
    modalDescription.textContent = `Полное описание товара ${index + 1}`; // Пример изменения текста
    
    modal.style.display = "block";
  });
});

// Закрываем модальное окно при клике на крестик
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрытие модального окна, если пользователь кликнет за пределы окна
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});




// Определяем элементы шагов
const steps = document.querySelectorAll('.step');

// Функция для показа подсказки при наведении
// 

steps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => {
      const tooltip = step.querySelector('.tooltip');
      tooltip.style.display = 'block';
      
      // Устанавливаем анимацию для 4-го шага (индекс 3)
      if (index === 3) {
        tooltip.style.animation = 'moveFromLeft 0.5s forwards';
      } else {
        tooltip.style.animation = 'moveFromRight 0.5s forwards';
      }
  
      tooltip.style.opacity = '1';
    });
  
    step.addEventListener('mouseleave', () => {
      const tooltip = step.querySelector('.tooltip');
      tooltip.style.animation = 'none';  // Убираем анимацию при уходе мыши
      tooltip.style.display = 'none';
      tooltip.style.opacity = '0';
    });
  });
  