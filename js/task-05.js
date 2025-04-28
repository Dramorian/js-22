const checkForSpam = function (message) {
  // Приведение строки к нижнему регистру
  const lowerCaseMessage = message.toLowerCase();

  // Проверка строки на содержание слова 'spam' или 'sale'
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
