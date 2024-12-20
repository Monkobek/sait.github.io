const testForm = document.getElementById('test-form');
const resultsDiv = document.getElementById('results');

testForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  let score = 0;
  const answers = {
    q1: 'Правильный ответ 1',
    q2: 'Правильный ответ 2',
    // Добавь ответы для всех вопросов
  };

  for (const [key, value] of Object.entries(answers)) {
    const input = testForm[key];
    const feedback = document.createElement('div');
    if (input.value.trim().toLowerCase() === value.toLowerCase()) {
      score++;
      feedback.textContent = 'Верно!';
      feedback.style.color = 'green';
    } else {
      feedback.textContent = `Неверно, правильный ответ: ${value}`;
      feedback.style.color = 'red';
    }
    input.parentElement.appendChild(feedback);
  }

  resultsDiv.textContent = `Ваш результат: ${score} из ${Object.keys(answers).length}`;
});