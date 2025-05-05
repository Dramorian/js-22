const findBestEmployee = function (employees) {
  let bestEmployee = '';
  let maxTasks = 0;

  // Object.entries() возвращает массив пар [ключ, значение] объекта
  const employeeNames = Object.entries(employees);

  // Деструктуризация: получение имени (employee) и количества задач (tasks)
  for (const [employee, tasks] of employeeNames) {
    if (tasks > maxTasks) {
      maxTasks = tasks; // Обновление максимума, если найдено больше задач
      bestEmployee = employee; // Запоминание нового лучшего сотрудника
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
