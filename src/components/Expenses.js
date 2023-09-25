import React, { useState } from "react";
import ExpensesList from "./ExpenseForm/ExpensesList";

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




  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        defaultYear={filterYear}
      />

      <h2>Let's get started!</h2>

<ExpensesList filteredExpensesByDate={filteredExpensesByDate}/>
  
    
    </Card>
  );
}

export default Expenses;
