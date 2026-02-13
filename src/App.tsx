import './App.css';
import { useState } from 'react';

function App() {
  const [x, setX] = useState(0);
  function handleClick() {
    setX((prev) => Math.floor(Math.random() * 100));
  }
  return (
    <div>
      <button onClick={handleClick}>{x}</button>
    </div>
  );
}

export default App;
