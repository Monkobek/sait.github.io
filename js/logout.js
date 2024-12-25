// Обработчик события на кнопку "Выйти"
const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', logout);
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout-btn');

  // Обработчик кнопки "Выйти"
  logoutButton.addEventListener('click', () => {
    // Удаление информации о пользователе и тесте из localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('testResult');
    
    // Перенаправление на страницу входа
    window.location.href = 'login.html';
  });
});