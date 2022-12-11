import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// named import
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

//render(<HomePage />, document.getElementById("root"));

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// react is configured to look into this file and its imports
