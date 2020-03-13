import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
import { FaBeer } from "react-icons/fa";

const Expenselist = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expenses => {
          return <Item key={expenses.id} expenses={expenses}></Item>;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default Expenselist;
