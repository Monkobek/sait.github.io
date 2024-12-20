// Галерея - Слайдер изображений
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideInfo = document.getElementById('slide-info');

let currentSlide = 0;

// Функция для обновления отображаемого слайда
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  slideInfo.textContent = `${currentSlide + 1} слайд из ${slides.length}`;
}

// Переключение на предыдущий слайд
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
  updateSlider();
});

// Переключение на следующий слайд
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : slides.length - 1;
  updateSlider();
});

// Инициализация
updateSlider();
