import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Random-number">{number}</div>
        <button onClick={randomNumber}>Create New Random Number</button>
      </header>
    </div>
  );
}

export default App;
