document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.getElementById('auth-form');
  const submitBtn = document.getElementById('submit-btn');

  // Ссылки на элементы формы
  const loginInput = document.getElementById('login');
  const dobInput = document.getElementById('dob');
  const genderInput = document.getElementById('gender');

  const loginError = document.getElementById('login-error');
  const dobError = document.getElementById('dob-error');
  const genderError = document.getElementById('gender-error');

  // Проверка валидности всех полей
  const checkValidity = () => {
    let isValid = true;

    // Проверка логина
    if (!loginInput.validity.valid) {
      loginError.textContent = 'Логин должен содержать от 4 до 10 символов и только русские буквы или цифры.';
      isValid = false;
    } else {
      loginError.textContent = '';
    }

    // Проверка даты рождения
    if (!dobInput.validity.valid) {
      dobError.textContent = 'Пожалуйста, выберите корректную дату.';
      isValid = false;
    } else if (new Date(dobInput.value) > new Date()) {
      dobError.textContent = 'Дата рождения не может быть в будущем.';
      isValid = false;
    } else {
      dobError.textContent = '';
    }

    // Проверка выбора пола
    if (!genderInput.validity.valid) {
      genderError.textContent = 'Пожалуйста, выберите пол.';
      isValid = false;
    } else {
      genderError.textContent = '';
    }

    return isValid;
  };

  // Обработка отправки формы
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Проверяем валидность всех полей
    if (checkValidity()) {
      // Если форма валидна, сохраняем данные и переходим на главную страницу
      const userData = {
        login: loginInput.value.trim(),
        dob: dobInput.value,
        gender: genderInput.value,
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      // Переход на главную страницу
      window.location.href = 'index.html';
    }
  });

  // Обновляем статус кнопки "Войти" при вводе данных
  authForm.addEventListener('input', () => {
    submitBtn.disabled = !authForm.checkValidity();
  });

  // Отключаем кнопку по умолчанию
  submitBtn.disabled = true;
});
