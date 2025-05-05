const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// Добавление поля mood
user.mood = 'happy';
// Замена значения hobby
user.hobby = 'skydiving';
// Замена значения premium
user.premium = false;

// Вывод содержимого объекта в формате ключ:значение
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
