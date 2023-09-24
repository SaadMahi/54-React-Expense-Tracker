import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "./Card";
import "./css/Expenses.css";

function Expenses(props) {

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js');
    console.log(selectedYear)
  }

  const [filterYear, setFilteredYear] = useState('2019');


  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} 
        defaultYear={filterYear}
      />

      <h2>Let's get started!</h2>

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
