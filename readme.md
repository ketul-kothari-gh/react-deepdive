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

# Hooks

All hooks can be used only inside React Component.
