document.addEventListener('DOMContentLoaded', () => {
    // Получаем данные пользователя из localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    const usernameElem = document.getElementById('username');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Если пользователь авторизован, показываем имя и кнопку выхода
    if (userData) {
      usernameElem.textContent = `Привет, ${userData.login}!`;
      logoutBtn.style.display = 'inline-block';
    }
  
    // Обработчик кнопки "Выйти"
    logoutBtn.addEventListener('click', () => {
      // Очищаем данные из localStorage и перенаправляем на страницу авторизации
      localStorage.removeItem('userData');
      window.location.href = 'login.html';
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const usernameDiv = document.getElementById('username');
    const testScoreDiv = document.getElementById('test-score');
  
    // Получаем данные пользователя из localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      usernameDiv.textContent = userData.login;
    }
  
    // Получаем результат теста из localStorage
    const testResult = localStorage.getItem('testResult');
    if (testResult !== null) {
      testScoreDiv.textContent = `Вы набрали: ${testResult} баллов из 6`;
    } else {
      testScoreDiv.textContent = 'Тест еще не пройден';
    }
  
    // Обработка выхода
    document.getElementById('logout-btn').addEventListener('click', () => {
      localStorage.clear();
      window.location.href = 'login.html';
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const result = localStorage.getItem('testResult');
    const resultText = document.getElementById('testResult');

    if (result !== null) {
      resultText.textContent = `Вы набрали: ${result} баллов из 6`;
    } else {
      resultText.textContent = 'Вы не проходили тест';
    }
  });