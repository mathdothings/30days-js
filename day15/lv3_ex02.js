class PersonAccount {
  constructor(firstName, lastName, incomes = [], expenses = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }

  addIncome(incomeDescription, value) {
    return this.incomes.push({ [incomeDescription]: value });
  }

  addExpense(expenseDescription, value) {
    return this.expenses.push({ [expenseDescription]: value });
  }

  totalIncome() {
    let total = 0;
    this.incomes.forEach((income) => {
      total += +Object.values(income);
    });

    return total;
  }

  totalExpense() {
    let total = 0;
    this.expenses.forEach((expense) => {
      total += +Object.values(expense);
    });

    return total;
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    return this;
  }
}

const person = new PersonAccount("Math", "Dothings");
person.addIncome("Work", 2000);
person.addIncome("Freelancing", 800);
person.addExpense("Food", 500);
person.addExpense("Internet", 100);
console.log(person.totalIncome());
console.log(person.totalExpense());
console.log(person.accountBalance());
console.log(person.accountInfo());
