import { useState } from "react";

import "./App.css";

function App() {
  const [x, setX] = useState(0);
  function handleClick() {
    setX(Math.floor(Math.random() * 100));
  }
  return (
    <div>
      <button style={{ border: "1px solid red ", background: "cyan" }} onClick={handleClick}>
        push {x} push
      </button>
    </div>
  );
}

export default App;
