import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setExpenseVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };

    props.onAddExpense(expenseData);
    setExpenseVisible(false);
  };

  const cancelExpenseHandler = () => {
    setExpenseVisible(false);
  };

  const addNewExpenseHandler = () => {
    setExpenseVisible(true);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={addNewExpenseHandler}>Add new expense</button>
      )}

      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
