# Component

Functions that return JSX. Allows to create custom HTML element. When React build process encounters it in JSX, it renders the component's JSX (has to execute the entire component function).

# Events

React provides react events for all native DOM events. They are special props that start with on[EventName]. Takes function that is to be invoked as value.

```
<button onClick='clickHandler'>Show message</button>
```

# State

- React components has a built-in state object. The state object stores property values that belong to the component (individual instace).
- When the state changes, the component instance that it belongs to is re-rendered. This does not happen for property value changes that are stored as normal variable. So any changes in normal variables, don't reflect on the screen.
- State declaration statement will create state variable the first time the component instance is rendered. Any further re-rendering of the instance will return the update state value (this updates the local reference).
- State should not be assigned value directly (so reference is declared via const) as that will not rerender the component instace. This can only be done via setter function. setter function will Schedule the update to state value and re-rendering the component (does not happen immediately - JS is single threaded).
- The state survives when the component re-renders.

```
const [sample, setSample] = useState("Hello");
```

- when using multipe state, can combine as single object. When updating such combined state, react's recommend way is to pass arrow function. This ensures that in case of multiple updates - states are updated in proper order

Its okay to call multiple setStates since React internally does batching before setState and hence will only call render once.

```
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

If there is a state that always changes when another state changes and not anytime else, then it should not be maintained as state.

# Controlled/ Uncontrolled component

A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.

An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.

# Hooks

All hooks can be used only inside React Component.
