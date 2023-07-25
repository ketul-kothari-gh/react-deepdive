import React from "react";
import Expenses from "./components/Expenses/Expenses";

// Identifyying which all components are required is one key aspect in developing react applicatin
// creating component tree helps in identifying all components required and which component a component will nest in
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // not allowed in vanilla js.. this is transformed by React build process
  // JSX is actually transformed using React object - which is not required to be imported in recent versions
  // previously every component required - import React from 'react'
  // below is an alternate to JSX, actual html generated is completely different in both the cases
  // as it is transformed by React
  // This also explains why root elements is required - as can only return single object from function
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
