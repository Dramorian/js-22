const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

// Функция, которая возвращает массив значений заданного свойства из массива объектов
const getAllPropValues = function (arr, prop) {
  const result = [];

  // Перебор каждого объекта в массиве
  for (const item of arr) {
    // Проверка существования заданного свойства в текущем объекте
    if (prop in item) {
      // При наличии свойства добавление в итоговый массив
      result.push(item[prop]);
    }
  }

  return result;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
