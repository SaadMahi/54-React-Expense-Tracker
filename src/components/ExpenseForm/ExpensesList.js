import ExpenseItem from "../ExpenseItem";


function ExpensesList(props){

    let emptyExpenseList = <p>No expense found!!!</p>

    if(props.filteredExpensesByDate.length > 0){
      emptyExpenseList = props.filteredExpensesByDate.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }

    return(
       <>
        {emptyExpenseList}
        </>
    )
}

export default ExpensesList;