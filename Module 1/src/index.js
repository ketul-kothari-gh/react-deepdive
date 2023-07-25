import ReactDOM from "react-dom/client";

// not allowed in vanilla JS - importing css into JS .. this is transformed by React build process
import "./index.css";
// .js extension is missing, not allowed in vanilla js.. this is transformed by React build process
import App from "./App";

// React entry point
const root = ReactDOM.createRoot(document.getElementById("root"));
// not allowed in vanilla js.. this is transformed by React build process
root.render(<App />);
