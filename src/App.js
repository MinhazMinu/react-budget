import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpanseList from "./components/ExpanseList";
import { v4 as uuid } from "uuid";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 600 },
  { id: uuid(), charge: "card bill", amount: 1600 }
];

function App() {
  // *******State Variable*********
  const [expenses, setExpense] = useState(initialExpenses);

  return (
    <div>
      <Alert></Alert>
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm></ExpenseForm>
        <ExpanseList expenses={expenses}></ExpanseList>
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          $
          {expenses.reduce((sum, i) => {
            sum = sum + i.amount;
            return sum;
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
