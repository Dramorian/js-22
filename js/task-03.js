const findLongestWord = function (string) {
  // Разбиваем строку на массив слов по пробелам
  const words = string.split(' ');

  // Инициализация переменной для сохранения самого длинного слова — сначала первое
  let longestWord = words[0];

  // Проход по каждому слову, начиная с другого
  for (let i = 1; i < words.length; i++) {
    // Если текущее слово длиннее за сохранённое в longestWord — обновляем его
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  // Возвращаем самое длинное слово
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
