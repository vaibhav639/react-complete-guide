import React from 'react';
import NewExpense from './components/NewExpense/NewExpense.js';
import Expenses from './components/Expenses/Expenses.js';                                                                              ;

const App = () => {
  const expenses = [
    {id: '1', title: "TV", amount: 2000, date: new Date (2020,1,10)},
    {id: '2', title: "AC", amount: 5000, date: new Date (2020,2,10)},
    {id: '3', title: "COOLER", amount: 10000, date: new Date (2020,3,10)},
    {id: '4', title: "FAN", amount: 2000, date: new Date (2020,4,10)},
    {id: '5', title: "RADIO", amount: 4000, date: new Date (2020,5,10)},
    {id: '6', title: "CAR", amount: 6000, date: new Date (2020,6,10)},
    
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
