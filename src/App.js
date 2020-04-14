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

  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpensesForm />

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
