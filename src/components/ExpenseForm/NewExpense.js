import ExpenseForm from "./ExpenseForm";
import '../ExpenseForm/NewExpense.css'

function NewExpense(props){


    return(
    <div className="new-expense">
    <ExpenseForm pullData={props.pullData} />
    </div>
    )
}

export default NewExpense;