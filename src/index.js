import React from "react";
import ReactDOM from "react-dom";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
