import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';

function App() {
  
  const [count, setCount] = useState(0);
  const [savedEntries, setSavedEntries] = useState('');

  
  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

 
  function save() {
    const countStr = count + " - ";
    setSavedEntries(prevEntries => prevEntries + countStr);
    setCount(0); 
  }
  function reset(){
    setCount(0);
    setSavedEntries();

  }

  return (
    <main>

    <div id='yo'>
      <h1>People entered:</h1>
      <h2 id="count-el">{count}</h2>
      <button id='increment-btn' onClick={increment}>INCREMENT</button>
      <button id='decrement-btn' onClick={decrement}>DECREMENT</button>
      <button id='save-btn' onClick={save}>SAVE</button>
      <button id='reset-btn' onClick={reset}>RESET</button>
      <p id="save-el">Previous entries: {savedEntries}</p>
    </div>
    </main>
  );
}

export default App;
