import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="Example:Rent"
          />
        </div>
      </div>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="Example:100"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Submit
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;