import React from "react";
import ExpensesItem from "./ExpensesItem";
import { MdDelete } from "react-icons/md";
const ExpensesList = ({
  expenses,
  handleClearItem,
  handleDeleteItem,
  handleEditItem,
}) => {
  return (
    <div>
      <ul className="list">
        {expenses.map((expense) => (
          <ExpensesItem
            key={expense.id}
            expense={expense}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
          />
        ))}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={handleClearItem}>
          Clear Expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </div>
  );
};

export default ExpensesList;
