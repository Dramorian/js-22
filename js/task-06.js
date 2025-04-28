let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число:');

  // Если пользователь отменил ввод — выход из цикла
  if (input === null) {
    break;
  }

  // Приведение введённого значения в число
  const number = Number(input);

  // Проверка переменной на то, что она является числом
  if (isNaN(number)) {
    alert('Було введено не число, спробуйте ще раз');
    continue; // Переход на следующую итерацию цикла
  }

  // Добавление числа в массив
  numbers.push(number);
}

// Если массив не пустой — подсчёт суммы чисел
if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
}
