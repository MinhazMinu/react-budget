import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpanseList = ({ expenses }) => {
  console.log(expenses);

  return (
    <div>
      <ul>
        {expenses.map(expenses => {
          return <Item key={expenses.id} expense={expenses}></Item>;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </div>
  );
};

export default ExpanseList;
