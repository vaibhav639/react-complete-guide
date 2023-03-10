import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const[enteredTitle,setEnteredTitle] = useState('');
    const[enteredAmount,setEnteredAmount] = useState('');
    const[enteredDate,setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangehandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangerHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const SubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
    };

    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                     type='text'
                    onChange={titleChangeHandler}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                     type='number'
                     min = '0.01'
                     step = '0.01'
                     on onChange={amountChangehandler}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                     type='date'
                     min = '2019-01-01'
                     step = '20200-12-31'
                     onChange={dateChangerHandler}>
                    </input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm; 