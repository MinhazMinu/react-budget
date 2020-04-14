import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const ExpensesItem = ({ expense, handleDeleteItem, handleEditItem }) => {
  const { id, charge, amount } = expense;
  return (
    <div>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div>
          <button
            className="edit-btn"
            aria-label="edit button"
            onClick={() => handleEditItem(id)}
          >
            <MdEdit />{" "}
          </button>
          <button
            className="clear-btn"
            aria-label="delete button"
            onClick={() => handleDeleteItem(id)}
          >
            <MdDelete />{" "}
          </button>
        </div>
      </li>
    </div>
  );
};

export default ExpensesItem;
