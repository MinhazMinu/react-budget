import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import ExpensesForm from "./Components/ExpensesForm";
import ExpensesList from "./Components/ExpensesList";
import { notifySuccess, notifyError, notifyWarning } from "./Components/Alert";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const initialExpenses = [
    {
      id: uuid(),
      charge: "rent",
      amount: 1203,
    },
    {
      id: uuid(),
      charge: "rent",
      amount: 1203,
    },
    {
      id: uuid(),
      charge: "rent",
      amount: 1203,
    },
  ];
  // ====================State value==============================
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  // ==================== Function ==============================
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = {
        id: uuid(),
        charge,
        amount,
      };
      setExpenses([...expenses, singleExpense]);
      notifySuccess();
      setCharge("");
      setAmount("");
    } else {
      // alert
      notifyError();
    }
  };

  const handleEditItem = (id) => {
    const expense = expenses.find((item) => item.id === id);
    setCharge(expense.charge);
    setAmount(expense.amount);
  };

  const handleDeleteItem = (id) => {
    const remainingItem = expenses.filter((expense) => expense.id !== id);
    setExpenses(remainingItem);
    notifyWarning();
  };

  const handleClearItem = () => {
    setExpenses([]);
  };

  return (
    <>
      <h1>budget calculator</h1>
      <ToastContainer />
      <main className="App">
        <ExpensesForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />

        <ExpensesList
          expenses={expenses}
          handleClearItem={handleClearItem}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
        />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          {expenses.reduce((sum, i) => (sum += i.amount), 0)}
        </span>{" "}
      </h1>
    </>
  );
}

export default App;
