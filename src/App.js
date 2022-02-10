import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isActive, setActive] = useState("false");

  function toggle() {
    setActive(!isActive);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="App">
      <header className={isActive ? "daytime" : "App-header"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <DayNightToggle
          size={65}
          onChange={() => toggle()}
          checked={isDarkMode}
        />
      </header>
    </div>
  );
}

export default App;
