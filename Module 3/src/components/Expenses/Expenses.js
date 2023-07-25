import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

// using object destructuring
const Expenses = ({ items }) => {
  const [year, setYear] = useState("2020");

  const yearFilterChangeHandler = function (filterYear) {
    setYear(filterYear);
    // this will not immediately show the updated value as state update is scheduled
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <p>{year}</p>
        <ExpensesFilter
          defaultYear={year}
          onYearFilterChange={yearFilterChangeHandler}
        />
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
