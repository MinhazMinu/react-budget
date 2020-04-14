import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import Alert from "./Components/Alert";
import ExpensesForm from "./Components/ExpensesForm";
import ExpensesList from "./Components/ExpensesList";

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
      setCharge("");
      setAmount("");
    } else {
      // alert
    }
  };

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpensesForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />

        <ExpensesList expenses={expenses} />
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
