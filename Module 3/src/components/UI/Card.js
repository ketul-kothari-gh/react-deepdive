import "./Card.css";

// children props is often used to create wrappers around actual content
// This Card can be used for other content as well with common style
function Card(props) {
  // fetching any class attached on class component and applying it on div wrapping children
  const className = "card " + props.className;
  /* children is a special property assigned automatically. 
    It represents the content between component start and end tags. 
    */
  return <div className={className}>{props.children}</div>;
}

export default Card;
