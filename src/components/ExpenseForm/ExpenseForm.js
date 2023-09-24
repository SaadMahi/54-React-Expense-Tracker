import React, { useState } from "react";
import "../ExpenseForm/ExpenseForm.css";

function ExpenseForm() {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function checkUserIntput(e) {
    const { name, value } = e.target;
    // console.log(name, value)
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function submitHandler(e) {
    e.preventDefault();

    console.log(data);

    setData({
      title: "",
      amount: "",
      date: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={checkUserIntput}
            name="title"
            value={data.title}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={checkUserIntput}
            name="amount"
            value={data.amount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={checkUserIntput}
            name="date"
            value={data.date}
            type="date"
            min="2020-01-01"
            max="2023-12-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
