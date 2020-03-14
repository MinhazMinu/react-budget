import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({
  expenses,
  clearAllExpenses,
  deleteExpense,
  editExpense
}) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
              editExpense={editExpense}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearAllExpenses}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
