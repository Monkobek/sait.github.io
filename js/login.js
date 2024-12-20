document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.getElementById('auth-form');

  // Обработка формы авторизации
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    // Проверка валидности данных
    if (login && dob && gender) {
      // Сохраняем данные в localStorage
      const userData = { login, dob, gender };
      localStorage.setItem('userData', JSON.stringify(userData));

      // Перенаправляем на страницу профиля
      window.location.href = 'profile.html';
    } else {
      alert('Пожалуйста, заполните все поля!');
    }
  });
});
