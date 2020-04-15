import React from "react";
import { MdSend } from "react-icons/md";

const ExpensesForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">
              <input
                type="text"
                className="form-control"
                id="charge"
                name="charge"
                placeholder="your expenses"
                value={charge}
                onChange={handleCharge}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="charge">
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                placeholder="amount"
                value={amount}
                onChange={handleAmount}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="btn">
          {edit ? "Edit" : "Submit"}
          <MdSend className="btn-icon" />
        </button>
      </form>
    </div>
  );
};

export default ExpensesForm;
