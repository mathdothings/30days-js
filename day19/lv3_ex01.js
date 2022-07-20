function personAccout() {
  const firstName = "Math";
  const lastName = "Dothings";
  const incomes = [];
  const expenses = [];

  function addIncome(income, value) {
    incomes.push({ description: income, value: value });
  }

  addIncome("Software Enginner", 10000);
  addIncome("Freelancing", 1000);
  addIncome("Coding", 1000);
  addIncome("Misc", 5000);

  function addExpense(expense, value) {
    expenses.push({ description: expense, value: value });
  }

  addExpense("PC", 5000);
  addExpense("Food", 500);
  addExpense("Coding", 5000);
  addExpense("Misc", 5000);

  function totalIncome() {
    if (incomes.length === 1) {
      return incomes[0].value;
    } else {
      let total = 0;
      incomes.forEach((income) => (total += income.value));
      return total;
    }
  }

  function totalExpense() {
    if (expenses.length === 1) {
      return expenses[0].value;
    } else {
      let total = 0;
      expenses.forEach((expense) => (total += expense.value));
      return total;
    }
  }

  function accountBalace() {
    return totalIncome() - totalExpense();
  }

  const accountInfo = () => {
    return `
    Account Ownwer: ${firstName} ${lastName}
    Incomes: ${incomes};
    Expenses: ${expenses};
    accountBalace: ${accountBalace()};
    `;
  };

  return {
    accountInfo: accountInfo(),
    totalIncome: totalIncome(),
    totalExpense: totalExpense,
    accountBalace: accountBalace(),
  };
}
// console.log(personAccout());

const persAcc = personAccout();
console.log(persAcc.accountInfo);
console.log(persAcc.accountBalace);
console.log(persAcc.totalExpense()); // need to call the inner function since totalExpense returns a expression instead of a value
