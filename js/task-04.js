const formatString = function (string) {
  // Проверяем длину строки
  if (string.length <= 40) {
    // Если длина строки 40 символов или меньше — возвращаем строку как есть
    return string;
  }

  // Если длина больше 40 — обрезаем строку и добавляем троеточие
  return string.slice(0, 40) + '...';
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// Вернётся оригинальная строка: Curabitur ligula sapien, tincidunt non.

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// Вернётся форматированная строка: Vestibulum facilisis, purus nec pulvinar...

console.log(formatString('Curabitur ligula sapien.'));
// Вернётся оригинальная строка: Curabitur ligula sapien.

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// Вернётся форматированная строка: Nunc sed turpis. Curabitur a felis in nu...
