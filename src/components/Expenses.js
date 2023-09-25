import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "./Card";
import "./css/Expenses.css";

function Expenses(props) {
  // Getting logs of dates on change
  const [filterYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear)
    setFilteredYear(selectedYear);
  };

  // filtered dates from array of expenses
  const filteredExpensesByDate = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );


  let emptyExpenseList = <p>No expense found!!!</p>

  if(filteredExpensesByDate.length > 0){
    emptyExpenseList = filteredExpensesByDate.map((expense, index) => (
      <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        defaultYear={filterYear}
      />

      <h2>Let's get started!</h2>

    {emptyExpenseList}
    
    </Card>
  );
}

export default Expenses;
