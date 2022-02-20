import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 12),
  },
  { id: "2", title: "Phone Bill", amount: 300, date: new Date(2021, 12, 12) },
  { id: "3", title: "Groceries", amount: 150.2, date: new Date(2022, 6, 7) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
