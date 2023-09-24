import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./css/ExpenseItem.css";

function ExpenseItem({ title, amount = "please pass in amount", date }) {

      


  const [defTitle, setTitle] = useState(title);

  function click() {
    console.log("clicked");
    setTitle("Update");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{defTitle}</h2>
        <span className="expense-item__price">{amount}</span>
      </div>

      <button onClick={click}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
