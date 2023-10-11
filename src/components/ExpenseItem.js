import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./css/ExpenseItem.css";

function ExpenseItem({ title, amount = "please pass in amount", date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">{amount}</span>
      </div>
    </Card>
  );
}

export default ExpenseItem;
