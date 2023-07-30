// This is required to tell React build process that this component is dependent upon this css
// not valid js but is transformed by react build process
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// Component name must start with capital letter
// as while looking at JSX - React identifies components based on this rule
// props can be names as anything, it's just a JS object (key-vault collection)
const ExpenseItem = (props) => {
  // components must return single element (or fragments)
  // Custom component - class name does not mean anything
  // useful when using children prop, this class name can be applied to div that will be wrapper around
  // children prop in custom component
  return (
    <li>
      <Card className="expense-item">
        {/* JSX provides alrternative for certain attributes such as class, for as these are reserved 
       keywords in JS. 
      */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
