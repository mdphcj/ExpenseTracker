import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }, {
    id: 'e5',
    title: 'study table',
    amount: 500,
    date: new Date(2020, 5, 12),
  }, { id: 'e6', title: 'mobile', amount: 100, date: new Date(2019, 4, 1) },
  { id: 'e7', title: 'rumal', amount: 10, date: new Date(2022, 9, 23) },
  { id: 'e8', title: 'stationary', amount: 50, date: new Date(2021, 6, 9) },
  { id: 'e9', title: 'paint', amount: 10000, date: new Date(2020, 3, 29) },
  { id: 'e10', title: 'charger', amount: 600, date: new Date(2019, 11, 11) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
