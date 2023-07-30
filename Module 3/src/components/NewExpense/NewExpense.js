import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  // creating new function here and not using one direcly passed via props from parent component
  // as it is responsibility of MewExpense component to ensure new expense has all the properties
  const [showForm, setShowForm] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  }

  const showFormHandler = () => setShowForm(true);

  const cancelSubmissionHandler = () => setShowForm(false);

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={showFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelSubmission={cancelSubmissionHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
