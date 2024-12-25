document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const slideInfo = document.getElementById('slide-info');

  let currentSlide = 0;

  function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    slideInfo.textContent = `${currentSlide + 1} слайд из ${slides.length}`;

    // Disable buttons at edges
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  // Initial setup
  updateSlider();
});
// Функция обновления слайда
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  slideInfo.textContent = `${currentSlide + 1} слайд из ${slides.length}`;
}

// Инициализация
updateSlider();
