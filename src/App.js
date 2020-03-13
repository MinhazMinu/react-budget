import React, { useState } from "react";

import "./App.css";
import Expenselist from "./components/Expenselist";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const intialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 4600 },
  { id: uuid(), charge: "creadit card bill", amount: 1200 }
];

function App() {
  const [expenses, setExpenses] = useState(intialExpenses);

  return (
    <div>
      <Alert></Alert>
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm></ExpenseForm>
        <Expenselist expenses={expenses}></Expenselist>
      </main>
      <h1>
        text spending :
        <span className="total">
          ${""}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
