document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('test-form');
  const resultDiv = document.getElementById('result');
  const scoreText = document.getElementById('score');
  const retryBtn = document.getElementById('retry-btn');
  const checkBtn = form.querySelector('button[type="submit"]'); // Кнопка "Проверить ответы"
  const errorMessages = document.querySelectorAll('.error');

  // Перезапуск теста
  retryBtn.addEventListener('click', () => {
    form.reset();
    resultDiv.style.display = 'none';
    errorMessages.forEach(el => el.textContent = '');
    checkBtn.disabled = false;  // Включаем кнопку "Проверить" после сброса
  });

  // Обработка формы
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    let valid = true;

    // Деактивируем кнопку "Проверить ответы", чтобы она была неактивна до нажатия на "Пройти заново"
    checkBtn.disabled = true;

    // Сброс ошибок
    errorMessages.forEach(el => el.textContent = '');

    // Вопрос 1
    const q1Answer = document.getElementById('q1').value.trim().toLowerCase();
    if (q1Answer === 'горилла') { // Пример правильного ответа
      score++;
      document.getElementById('q1-error').textContent = 'Ответ правильный';
      document.getElementById('q1-error').style.color = 'green';
    } else {
      document.getElementById('q1-error').textContent = 'Ответ неправильный, правильный ответ: горилла';
      document.getElementById('q1-error').style.color = 'red';
      valid = false;
    }

    // Вопрос 2
    const q2Answer = document.getElementById('q2').value;
    if (q2Answer === 'уакари') {
      score++;
      document.getElementById('q2-error').textContent = 'Ответ правильный';
      document.getElementById('q2-error').style.color = 'green';
    } else {
      document.getElementById('q2-error').textContent = 'Ответ неправильный, правильный ответ: уакари';
      document.getElementById('q2-error').style.color = 'red';
      valid = false;
    }

    // Вопрос 3
    const q3Answer = document.getElementById('q3').value.trim().toLowerCase();
    if (q3Answer === 'белорукий гиббон') { // Пример правильного ответа
      score++;
      document.getElementById('q3-error').textContent = 'Ответ правильный';
      document.getElementById('q3-error').style.color = 'green';
    } else {
      document.getElementById('q3-error').textContent = 'Ответ неправильный, правильный ответ: белорукий гиббон';
      document.getElementById('q3-error').style.color = 'red';
      valid = false;
    }

    // Вопрос 4
    const q4Answer = document.getElementById('q4').value;
    if (q4Answer === 'Африка') {
      score++;
      document.getElementById('q4-error').textContent = 'Ответ правильный';
      document.getElementById('q4-error').style.color = 'green';
    } else {
      document.getElementById('q4-error').textContent = 'Ответ неправильный, правильный ответ: африка';
      document.getElementById('q4-error').style.color = 'red';
      valid = false;
    }

    // Вопрос 5
    const q5Answer = document.getElementById('q5').value.trim().toLowerCase();
    if (q5Answer === 'капуцин') {
      score++;
      document.getElementById('q5-error').textContent = 'Ответ правильный';
      document.getElementById('q5-error').style.color = 'green';
    } else {
      document.getElementById('q5-error').textContent = 'Ответ неправильный, правильный ответ: капуцин';
      document.getElementById('q5-error').style.color = 'red';
      valid = false;
    }

    // Вопрос 6
    const q6Answer = document.getElementById('q6').value;
    if (q6Answer === 'пауковые обезьяны') {
      score++;
      document.getElementById('q6-error').textContent = 'Ответ правильный';
      document.getElementById('q6-error').style.color = 'green';
    } else {
      document.getElementById('q6-error').textContent = 'Ответ неправильный, правильный ответ: пауковые обезьяны';
      document.getElementById('q6-error').style.color = 'red';
      valid = false;
    }

    // Отображение результатов
    scoreText.textContent = `Вы набрали: ${score} баллов из 6`;
    resultDiv.style.display = 'block';

    // Сохранение результата в localStorage (если нужно)
    localStorage.setItem('testResult', score);
  });
});
