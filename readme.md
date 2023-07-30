# Component

Functions that return JSX. Allows to create custom HTML element. When React build process encounters any component, it renders the component's JSX (has to execute the entire component function).

# Events

React provides react events for all native DOM events. They are special props that start with on[EventName]. Takes function that is to be invoked as value.

```
<button onClick='clickHandler'>Show message</button>
```

# State

- React components has a built-in state object. The state object stores property values that belong to the instance of the component. If the same component is being used at multiple places, they share different state.
- When the state changes, the component instance that it belongs to is re-rendered. This does not happen for property value changes that are stored as normal variable. So any changes in normal variables, don't reflect on the screen.
- State declaration statement (using hook i.e. useState) will create state variable the first time the component instance is rendered. Any further re-rendering of the component instance, the useState hook will return the updated state value and in turn updates the local reference variable.
- State should not be assigned value directly (so reference is declared via const) as that will not rerender the component instace. This can only be done via setter function. setter function will schedule the update to state value and re-rendering the component (does not happen immediately - JS is single threaded).
- The state survives when the component re-renders.

```
const [sample, setSample] = useState("Hello");
```

- When new state value depends on previous state value, react's recommended way is to use Setter variation that accepts function which takes prevState as parameter. This prevState can then be referred in new state.
  Same is recommended when using multiple states that are combined as single object. This ensures that in case of multiple updates - states are updated in proper order.

```
const [items, setItems] = useState([]);
...
setItems((prevState) => [...prevState, item])
```

```
    // Don't use this
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    // React's recommended way to ensure in case of multiple updates - states are updated in proper order
    // instead of using userInput can use immediately older state which is available as parameter
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
```

- Its okay to call multiple setState functions one after another, since React internally does batching before setState and hence will only call render once.

**_ from React documentation _**
In most cases, there is no difference between these two approaches. React always makes sure that for intentional user actions, like clicks, the age state variable would be updated before the next click. This means there is no risk of a click handler seeing a “stale” age at the beginning of the event handler.

However, if you do multiple updates within the same event, updaters can be helpful. They’re also helpful if accessing the state variable itself is inconvenient (you might run into this when optimizing re-renders).

# React form submission

To submit form, onSubmit event can be added to form rather than onClick on submit button.
Default submit event of HTML send the request to the server and reloads the page.
To stop this, event.preventDefault() can be called in form submit handler.

# Two way binding

Form inputs have onChange added - so any changes by the user reflects back on the state.
and inputs also have value attribute set to respective state, so any change in state apart from form will reflect in the form as well.
For ex: on submitting form, state can be updated to blank which will automatically update the form.

# Lifting the state up

To lift the state up means, sending updated state from child component to parent component chain. This can be send till the component where the data is required by either that component or another child component of the component. In such case the parent component will have to pass down the data to child component using props.

# Derived/Computed State

If there is a state that always changes when another state changes and not anytime else. Such state are termed as derived state and should not be maintained as state.

# Controlled/ Uncontrolled component

The parent component manages the state. Child component receives value and update callback function via props. When the user interacts with the child component, child component calls the callback handler of the parent component which in turn updates the state. State update re-renders the parent component which automatically renders the child component. Since, child component is not managing the state - it is termed as controlled component.

An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which causes the comoponent to re-render and reflect updates.

# Rendering list

The below code will render this items as siblings in the parent component or tag.
map method will return array - {[<ExpenseItem ... ></ExpenseItem>, <ExpenseItem ... ></ExpenseItem>]}
React will automatically transfrom array components into sibling items.

```
{filteredItems.map((item) => (
  <ExpenseItem
    key={item.id}
    title={item.title}
    amount={item.amount}
    date={item.date}
  ></ExpenseItem>
```

Using key attribute is required (best practice) as it allows React to uniquely identify the component. So when the corresponding item is deleted/updated, React knows excatly which dom element needs to be removed/updated. Or in case of add - where the item should be added.

**_ From React website _**
File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

# Storing JSX in variable

React allows storing JSX code in variables in component function. This is very useful to make JSX look lean ex: conditional rendering. Complex logic can be return in component function code and prepared JSX can be assigned to variable and then that vairable can be displayed in returned JSX.

```
let sampleJsx = '<p>Some random content !!!</p>'
```

This content can be displayed in component returned JSX like this

```
{sampleJsx}
```

# Conditional rendering

Displaying content only if condition is matched. Code constructs like if else, for etc are not allowed in JSX.

Using Ternary operator

```
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
)}
```

Using short circut

```
{filteredItems.length === 0 && <p>No expenses found.</p>}
{filteredItems.length > 0 &&
  filteredItems.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    ></ExpenseItem>
  ))}
```

using variables to store JSX in component function outside return

```
  let contentExpense = <p>No Expenses Found.</p>;
  if (filteredItems.length > 0) {
    contentExpense = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    ));
  }
```

Returning conditional content : Using conditional return statements if entire JSX to be retuned changes

```
if (props.items.length === 0)
  return <p>No Expenses Found.</p>

return <p>Expenses found</p>

```

# Styling (CSS)

- use inline style
  Setting up css in JSX directly using style attribute. In JSX it accepts object.
  Since JSX is converted into JS - property name of the style object must follow JS convention.
  For this react provides alternative such as : background-color --> backgroundColor

Inline style has always highest priority

```
<label style={{ color: "red", backgroundColor : "salmon" }}>Course Goal</label>

using state to make it dynamic, isValid is state
<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
```

using CSS classes

```
active css class is defined

<p className={!isValid ? 'active' : '' }>Style me!</p>
```

using css classes dynamically when another class is used - using javascript Template literals
here form-control class is always applied. invalid is applied based on state value.

```
css - any input field inside parent component marked form-control and invalid
.form-control.invalid input {
  border-color: red;
  background: rgb(146, 107, 107);
}


<div className={`form-control ${!isValid ? "invalid" : ""}`}>
```

import css by default are not scoped to components. This means CSS classes will be available for the entire page where this component is used.

```
import "./somestyle.css"
```

To make imported css, component scoped - css modules can be used.
CSS Modules let you write styles in CSS files but consume them as JavaScript objects for additional processing and safety. CSS Modules are very popular because they automatically make class and animation names unique so you don’t have to worry about selector name collisions.

CSS modules requires transformation during build process and classes are granted unique names.

- CSS modules are named using 'filename.module.css'. Only these files go uner transformation. Not other files.

CSS modules must be imported

```
import style from ./somestyle.module.css'

```

style can be treated as object in JS and classes can be referred using style.className.

```
.form-control {
  border-color: red;
  background: rgb(146, 107, 107);
}

<div className={`${styles[form-control]} ${!inValid && styles.isInvalid}  `}> --- </div>

```

# React dev tools

It's a browser extension, once installed can show

- component tree structure
- props received by a component
- hooks used by component - such as state (can change state value)
  etc

# Hooks

All hooks can be used only inside React Component.
