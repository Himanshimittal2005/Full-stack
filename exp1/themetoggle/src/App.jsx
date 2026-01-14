import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`page ${theme}`}>
      <div className="content">
        <h1>{theme} Mode</h1>
        <button onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App