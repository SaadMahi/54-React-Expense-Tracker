import ExpenseForm from "./ExpenseForm";
import "../ExpenseForm/NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const addNewExpenseFormBtn = (
    <div className="new-expense">
      <div
       className="new-expense__actions btn--center">
        <button
          onClick={addNewExpenseBtn}
          className="new-expense__add-expense-btn"
        >
          Add New Expense
        </button>
      </div>
    </div>
  );

  const [expenseControl, displayExpenseControl] =
    useState(addNewExpenseFormBtn);

  function cancelFormBtn() {
    displayExpenseControl(expenseControl);
  }

  function addNewExpenseBtn() {
    displayExpenseControl(
      <div className="new-expense">
        <ExpenseForm pullData={props.pullData} cancelFormFunc={cancelFormBtn} />
      </div>
    );
  }

  return <>{expenseControl}</>;
}

export default NewExpense;
