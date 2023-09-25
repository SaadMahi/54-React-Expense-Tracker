import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "./Card";
import "./css/Expenses.css";

function Expenses(props) {
  // if else condition for hidden dates
  const [hiddenDate, updateHiddenDate] = useState("(2020, 2021, 2022)");

  // Getting logs of dates on change
  const [filterYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear)
    setFilteredYear(selectedYear);

    // // if else condition for hidden dates
    if (selectedYear === "2019") {
      updateHiddenDate("(2020, 2021, 2022)");
    } else if (selectedYear === "2020") {
      updateHiddenDate("(2019, 2021, 2022)");
    } else if (selectedYear === "2021") {
      updateHiddenDate("(2019, 2020, 2022)");
    } else {
      updateHiddenDate("(2019, 2020, 2021)");
    }
  };

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        defaultYear={filterYear}
      />

      <p>
        <b>Dates:</b> for year {hiddenDate} are hidden
      </p>

      <h2>Let's get started!</h2>

      {props.items.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} 
      
    </Card>
  );
}

export default Expenses;
