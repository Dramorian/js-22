const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProducts, productName) {
  // Деструктуризация
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      return price * quantity; // При обнаружении сразу возвращается результат
    }
  }
  return 0; // Если продукт не найден
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Сканер')); // 8100

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800

console.log(calculateTotalPrice(products, 'Захоплення')); // 2400
