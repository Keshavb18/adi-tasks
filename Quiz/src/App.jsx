import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  function submitQuiz() {
    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "Narendra Modi") {
      score++;
    }
    if (q2 && q2.value === "Delhi") {
      score++;
    }
    if (q3 && q3.value === "Gas") {
      score++;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Your score is ${score} out of 3.`;
  }

  return (
    <>
      <h1>Simple Quiz</h1>
      <div className="quiz">
        <div>
          <p>1. Who is the Prime Minister of India?</p>
          <input type="radio" name="q1" value="Narendra Modi" /> Narendra Modi<br />
          <input type="radio" name="q1" value="Rahul Gandhi" /> Rahul Gandhi<br />
          <input type="radio" name="q1" value="Amit Shah" /> Amit Shah<br />
          <input type="radio" name="q1" value="Manmohan Singh" /> Manmohan Singh<br />
        </div>
        <div>
          <p>2. Which is the most polluted state in the world?</p>
          <input type="radio" name="q2" value="Delhi" /> Delhi<br />
          <input type="radio" name="q2" value="UP" /> UP<br />
          <input type="radio" name="q2" value="Kerala" /> Kerala<br />
          <input type="radio" name="q2" value="Maharashtra" /> Maharashtra<br />
        </div>
        <div>
          <p>3. What is methane?</p>
          <input type="radio" name="q3" value="Solid" /> Solid<br />
          <input type="radio" name="q3" value="Liquid" /> Liquid<br />
          <input type="radio" name="q3" value="Gas" /> Gas<br />
          <input type="radio" name="q3" value="Plasma" /> Plasma<br />
        </div>
        <button onClick={submitQuiz}>Submit</button>
        <p id="result"></p>
      </div>
    </>
  );
}

export default App;
