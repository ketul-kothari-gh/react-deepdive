import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// using object destructuring
const Expenses = ({ items }) => {
  const [year, setYear] = useState("2020");

  const yearFilterChangeHandler = function (filterYear) {
    setYear(filterYear);
  };

  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  // let contentExpense = <p>No Expenses Found.</p>;
  // if (filteredItems.length > 0) {
  //   contentExpense = filteredItems.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     ></ExpenseItem>
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={year}
          onYearFilterChange={yearFilterChangeHandler}
        />
        <div>
          <ExpensesChart expenses={filteredItems} />
          <ExpensesList items={filteredItems} />

          {/* {contentExpense} */}

          {/* map will return new array. React is capable of showing array items in html next to each other.
          {[<ExpenseItem ... ></ExpenseItem>, <ExpenseItem ... ></ExpenseItem>]}
          */}

          {/* 
Short cirucit for conditional rendering

          {filteredItems.length === 0 && <p>No expenses found.</p>}
          {filteredItems.length > 0 &&
            filteredItems.map((item) => (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              ></ExpenseItem>
            ))} */}

          {/*
Ternary operator for conditional rendering

          {filteredItems.length === 0 ? (
            <p>No expenses found.</p>
          ) : (
            filteredItems.map((item) => (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              ></ExpenseItem>
            ))
          )} */}
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
