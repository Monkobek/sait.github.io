// Словарь
if (document.querySelector('#dictionary')) {
    const terms = {
      "Слово1": "Описание 1",
      "Слово2": "Описание 2",
      "Слово3": "Описание 3"
    };
  
    const dictionary = document.getElementById('dictionary');
    const description = document.getElementById('word-description');
  
    for (const [word, desc] of Object.entries(terms)) {
      const li = document.createElement('li');
      li.textContent = word;
      li.addEventListener('click', () => {
        description.textContent = desc;
      });
      dictionary.appendChild(li);
    }
  }
  // Обработка работы словаря
const dictionary = {
  "Обезьяна": "Обезьяна — представитель приматов, обитающий в разных климатических зонах мира.",
  "Приматы": "Приматы — отряд млекопитающих, к которому относятся обезьяны, лемуры и человек.",
  "Горилла": "Горилла — крупнейшая из современных обезьян, живущая в тропических лесах Африки.",
  "Шимпанзе": "Шимпанзе — один из ближайших родственников человека, известен своим высоким интеллектом.",
  "Орангутан": "Орангутан — крупная древесная обезьяна, встречающаяся в тропических лесах Борнео и Суматры.",
  "Эволюция": "Эволюция — процесс изменения видов со временем под влиянием окружающей среды и других факторов.",
  "Древесный образ жизни": "Древесный образ жизни — стиль жизни, связанный с обитанием и передвижением по деревьям.",
  "Биология": "Биология — наука о живых организмах, включая их структуру, функции, рост и эволюцию.",
  "Социальное поведение": "Социальное поведение — формы взаимодействия между членами группы, включая сотрудничество и конкуренцию.",
  "Среда обитания": "Среда обитания — место, где организм живет и развивается, включая все окружающие условия."
};

const searchInput = document.getElementById('search');
const dictionaryList = document.getElementById('dictionary-list');
const definitionText = document.getElementById('definition-text');

// Фильтрация списка слов при вводе в поле поиска
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  Array.from(dictionaryList.children).forEach(item => {
    const term = item.textContent.toLowerCase();
    item.style.display = term.includes(query) ? '' : 'none';
  });
});

// Отображение описания при выборе слова
dictionaryList.addEventListener('click', (event) => {
  const term = event.target.dataset.term;
  if (term && dictionary[term]) {
    definitionText.textContent = dictionary[term];
  }
});s