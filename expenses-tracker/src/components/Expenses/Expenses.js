import { useState } from "react";

import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [expenseYearFilter, setExpenseYearFilter] = useState("2022");

  const filterExpenseChangeHandler = (year) => {
    setExpenseYearFilter(year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === expenseYearFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={expenseYearFilter}
          onFilterExpenseChange={filterExpenseChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
