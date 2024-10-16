import React from "react";
import ReactDom from "react-dom/client";
import Body from "./components/Body";
// import { createRoot } from "react-dom/client";
const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <Body />
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
