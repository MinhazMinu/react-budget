import React from "react";
import ExpensesItem from "./ExpensesItem";
import { MdDelete } from "react-icons/md";
const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <ul className="list">
        {expenses.map((expense) => (
          <ExpensesItem key={expense.id} expense={expense} />
        ))}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          Clear Expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </div>
  );
};

export default ExpensesList;
