import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expenses }) => {
  const { id, charge, amount } = expenses;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="Edit button">
          <MdEdit />
        </button>
        <button className="clear-btn" aria-label="Delete button">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
