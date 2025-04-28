const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// Константы для минимальной и максимальной длины логина
const MIN_LOGIN_LENGTH = 4;
const MAX_LOGIN_LENGTH = 16;

// Функция для проверки валидности логина по длине
const isLoginValid = login =>
  login.length >= MIN_LOGIN_LENGTH && login.length <= MAX_LOGIN_LENGTH;

// Функция для проверки уникальности логина
const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

// Функция для добавления логина в массив
const addLogin = function (allLogins, login) {
  // Проверка валидности логина
  if (!isLoginValid(login)) {
    return `Помилка! Логін повинен бути від ${MIN_LOGIN_LENGTH} до ${MAX_LOGIN_LENGTH} символів`;
  }

  // Проверка уникальности логина
  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  // Если все проверки пройдены — добавление логина в массив
  allLogins.push(login);
  return 'Логін успішно доданий!';
};

console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
