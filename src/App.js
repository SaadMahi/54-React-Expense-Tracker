import Expenses from "./components/Expenses";
import NewExpense from './components/ExpenseForm/NewExpense'
import { useState } from "react";

function App() {
  
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 100000,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 10000,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Spectre 360x Laptop",
      amount: 161000,
      date: new Date(2023, 8, 12),
    },
    
    
  ];

const [data, setData] = useState(expenses);

  const pullData = ((pulledData) => {
    setData((prev) =>  [...prev, pulledData])
  
    
})
// console.log(data);

  return(
    <>
      <NewExpense pullData={pullData} ></NewExpense>
      
  <Expenses 
  items={data} />


  
  </>
  )
}

export default App;
