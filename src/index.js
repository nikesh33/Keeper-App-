import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));
createRoot(document.getElementById('root')).render(<App />)
//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
