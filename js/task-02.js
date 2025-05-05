const countProps = function (obj) {
  // Использование метода Object.keys() для получения массива всех ключей объекта.
  // Затем возвращается длина этого массива, которая является количеством свойств.
  return Object.keys(obj).length;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
