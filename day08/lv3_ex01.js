const personAccount = {
  firstName: "Math",
  lastName: "Dothings",
  expenses: {
    rent: 500,
    water: 50,
    energy: 100,
    internet: 60,
    food: 400,
  },
  incomes: {
    work: 2000,
    freelancer: 500,
  },

  totalIncome: function () {
    let sum = 0;
    for (let key in this.incomes) {
      sum += this.incomes[key];
    }

    return sum;
  },

  totalExpense: function () {
    let sum = 0;
    for (key in this.expenses) {
      sum += this.expenses[key];
    }
    return sum;
  },

  accountInfo: function () {
    return (
      `${this.firstName} ${this.lastName}\nTotal Income: ` +
      `${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`
    );
  },

  addIncome: function (newIncome, value) {
    this.incomes[newIncome] = value;
  },

  addExpense: function (newExpense, value) {
    this.expenses[newExpense] = value;
  },

  accountBalance: function () {
    return Number(this.totalIncome() - this.totalExpense()).toFixed(2);
  },
};

personAccount.addExpense("candy", 300);
personAccount.addExpense("drink", 900);
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());
