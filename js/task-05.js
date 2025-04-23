// Запитуємо країну у користувача
let country = prompt('Введіть країну для доставки');

// Переводимо країну в нижній регістр для однакового порівняння
let normalizedCountry = country.toLowerCase();

// Створюємо змінні для правильної назви країни та ціни
let price;
let countryName;

switch (normalizedCountry) {
  case 'китай':
    price = 100;
    countryName = 'Китай';
    break;
  case 'чилі':
    price = 250;
    countryName = 'Чилі';
    break;
  case 'австралія':
    price = 170;
    countryName = 'Австралія';
    break;
  case 'індія':
    price = 80;
    countryName = 'Індія';
    break;
  case 'ямайка':
    price = 120;
    countryName = 'Ямайка';
    break;
  default:
    alert('У вашій країні доставка недоступна');
    break;
}

if (price !== undefined) {
  alert('Доставка в ' + countryName + ' буде коштувати ' + price + ' кредитів');
}
