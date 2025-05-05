const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0, // текущий баланс
  transactions: [], // массив всех транзакций
  nextId: 1, // для уникальных ID транзакций

  // Создание объекта транзакций
  createTransaction(amount, type) {
    return {
      id: this.nextId++, // уникальный ID, увеличивается при каждой новой транзакции
      type, // тип транзакции: deposit или withdraw
      amount, // сумма
    };
  },

  // Пополнение баланса
  deposit(amount) {
    this.balance += amount; // Увеличение баланса
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT); // Создание транзакции
    this.transactions.push(transaction); // Добавление в историю
  },

  // Снятие денег с баланса
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостатньо коштів для зняття');
      return;
    }
    this.balance -= amount; // Уменьшение баланса
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW); // Создание транзакции
    this.transactions.push(transaction); // Добавление в историю
  },

  // Возвращение текущего баланса
  getBalance() {
    return this.balance;
  },

  // Поиск транзакции по ID
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      const { id: transactionId } = transaction; // Деструктуризация для сравнения ID
      if (transactionId === id) {
        return transaction;
      }
    }
    return null;
  },

  // Возвращение суммы всех транзакций определённого типа
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      const { type: transactionType, amount } = transaction; // Деструктуризация
      if (transactionType === type) {
        total += amount;
      }
    }
    return total;
  },
};

// Проверка начального состояния
console.log('Начальный баланс:', account.getBalance()); // 0
console.log('История транзакций:', account.transactions); // []

// Тест deposit
account.deposit(500);
console.log('Баланс после депозита 500:', account.getBalance()); // 500
account.deposit(300);
console.log('Баланс после депозита 300:', account.getBalance()); // 800

// Тест withdraw
account.withdraw(200);
console.log('Баланс после снятия 200:', account.getBalance()); // 600
account.withdraw(1000); // Должно вывести "Недостатньо коштів для зняття"
console.log('Баланс после попытки снятия 1000:', account.getBalance()); // 600 (не изменился)

// Проверка истории транзакций
console.log('Все транзакции:', account.transactions);
/*
[
  { id: 1, type: 'deposit', amount: 500 },
  { id: 2, type: 'deposit', amount: 300 },
  { id: 3, type: 'withdraw', amount: 200 }
]
*/

// Тест поиска транзакции по ID
console.log('Транзакция с id=2:', account.getTransactionDetails(2)); // { id: 2, type: 'deposit', amount: 300 }
console.log('Транзакция с id=5:', account.getTransactionDetails(5)); // null (не существует)

// Тест суммы транзакций по типу
console.log(
  'Сумма всех депозитов:',
  account.getTransactionTotal(Transaction.DEPOSIT),
); // 800 (500 + 300)
console.log(
  'Сумма всех снятий:',
  account.getTransactionTotal(Transaction.WITHDRAW),
); // 200
