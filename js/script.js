// Проверка наличия данных пользователя в localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Функция для перенаправления на страницу авторизации, если данных нет
function redirectToLogin() {
  window.location.href = 'login.html'; // Перенаправляем на login.html
}

// Функция для отображения данных пользователя на странице
function displayUserData() {
  const usernameDiv = document.getElementById('username');
  const usernameElement = document.createElement('p');
  usernameElement.textContent = `Здравствуйте, ${userData.login}!`;
  usernameDiv.appendChild(usernameElement);
}

// Проверка данных
if (!userData) {
  redirectToLogin(); // Если данных нет, перенаправляем на страницу авторизации
} else {
  displayUserData(); // Если данные есть, показываем логин пользователя
}




// Функция для перенаправления на страницу авторизации
function redirectToLogin() {
  window.location.href = 'login.html'; // Перенаправляем на страницу login.html
}

// Функция для отображения данных пользователя
function displayUserData() {
  const profileInfoDiv = document.getElementById('profile-info');

  // Удаляем старое содержимое, чтобы избежать дублирования
  profileInfoDiv.innerHTML = '';

  if (userData) {
    // Создаем и добавляем элементы с данными пользователя
    const usernameElement = document.createElement('p');
    usernameElement.textContent = `Логин: ${userData.login}`;

    const dobElement = document.createElement('p');
    dobElement.textContent = `Дата рождения: ${userData.dob}`;

    const genderElement = document.createElement('p');
    genderElement.textContent = `Пол: ${userData.gender}`;

    // Добавляем эти данные в блок
    profileInfoDiv.appendChild(usernameElement);
    profileInfoDiv.appendChild(dobElement);
    profileInfoDiv.appendChild(genderElement);
  } else {
    // Если данных нет, перенаправляем на страницу авторизации
    redirectToLogin();
  }
}

// Функция для обработки выхода
function logout() {
  // Удаляем данные пользователя из localStorage
  localStorage.removeItem('userData');
  // Перенаправляем на страницу логина
  redirectToLogin();
}

// Проверяем, если данные пользователя есть, то показываем их
if (userData) {
  displayUserData();
} else {
  redirectToLogin(); // Если данных нет, перенаправляем на страницу авторизации
}

// Обработчик события на кнопку "Выйти"
const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', logout);
