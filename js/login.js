document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.getElementById('auth-form');
  const loginInput = document.getElementById('login');
  const dobInput = document.getElementById('dob');
  const genderInput = document.getElementById('gender');
  
  const loginError = document.getElementById('login-error');
  const dobError = document.getElementById('dob-error');
  const genderError = document.getElementById('gender-error');

  // Обработка формы авторизации
  authForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    // Очищаем предыдущие ошибки
    loginError.textContent = '';
    dobError.textContent = '';
    genderError.textContent = '';

    const login = loginInput.value.trim();
    const dob = dobInput.value;
    const gender = genderInput.value;

    let isValid = true;

    // Проверка логина (от 4 до 10 символов, только буквы и цифры)
    if (!/^[а-яА-Я0-9]{4,10}$/.test(login)) {
      loginError.textContent = 'Логин должен содержать от 4 до 10 символов, только русские буквы и цифры.';
      isValid = false;
    }

    // Проверка даты рождения (не пустая, должна быть в разумных пределах)
    if (!dob || new Date(dob) > new Date()) {
      dobError.textContent = 'Пожалуйста, выберите корректную дату рождения.';
      isValid = false;
    }

    // Проверка пола (не выбран)
    if (!gender) {
      genderError.textContent = 'Пожалуйста, выберите пол.';
      isValid = false;
    }

    // Если форма валидна, сохраняем данные в localStorage и перенаправляем на профиль
    if (isValid) {
      const userData = { login, dob, gender };
      localStorage.setItem('userData', JSON.stringify(userData));
      window.location.href = 'profile.html'; // Перенаправляем на страницу профиля
    }
  });
});
