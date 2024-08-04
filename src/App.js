import "./App.css";
import React, { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [resultado, setResultado] = useState('');

  function handleClick() {
    console.log(input1, input2);
    if (input1 < input2) {
      setResultado(input1);
    } else {
      setResultado(input2);
    }
  }

  return (
    <div className="App">
      <div>
        <input 
          className="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter a number"
        />

        <input 
          className="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter another number"
        />

        <div>
          <p>Resultado: {resultado}</p>
        </div>

        <button onClick={handleClick}>Calcular</button>
      </div>
    </div>
  );
}

export default App;
