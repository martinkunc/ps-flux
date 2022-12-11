import React from "react";
import { Link } from "react-router-dom";

// anything that can be instantiated should be PascalCase
// react assumes anything starting with uppercase is react component
// with lowercase is html element

// by default everythig in each file is private
// reactapp uses es modules, everything in es module is private

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flus and React Router for ultra responsive web app.s</p>
      <Link to="/about">About</Link>
    </div>
  );
}
// if only single item is exported, use default
export default HomePage;
